/**
 * Knex.js hook to replace id with ulid and remove ulid property
 * With support for conditional ID processing
 */

import { Knex } from 'knex';

// Define a type for options
interface UlidHookOptions {
  // Function to determine if we should process the object
  shouldProcess?: (obj: Record<string, any>, queryContext?: any) => boolean;
  // Context passed from the query
  queryContext?: any;
}

// Create a context key for passing options 
const ULID_HOOK_CONTEXT_KEY = Symbol('ulidHookOptions');

/**
 * Apply the hook to a Knex instance
 * @param knex - The Knex instance to hook into
 */
export const applyUlidReplacementHook = (knex: Knex): void => {
  // Save reference to the original Client.prototype.processResponse method
  const originalProcessResponse = knex.client.constructor.prototype.processResponse;

  // Override the processResponse method
  knex.client.constructor.prototype.processResponse = function(response: any, runner: any): any {
    // Call the original method to get the processed response
    const processedResponse = originalProcessResponse.call(this, response, runner);
    
    // Get options from the query context if available
    const options: UlidHookOptions = runner && runner.queryContext 
      ? runner.queryContext[ULID_HOOK_CONTEXT_KEY] || {}
      : {};

    // Process the response with options
    return processUlidInResponse(processedResponse, options);
  };
};

/**
 * Process a response to replace id with ulid and remove ulid property
 * @param response - The response from a Knex query
 * @param options - Options for conditional processing
 * @returns The processed response
 */
const processUlidInResponse = (response: any, options: UlidHookOptions = {}): any => {
  if (!response) return response;

  // Handle array responses (like select queries)
  if (Array.isArray(response)) {
    return response.map(item => processUlidInObject(item, options));
  }
  
  // Handle single object responses
  if (typeof response === 'object' && response !== null) {
    return processUlidInObject(response, options);
  }

  // Return unchanged for scalar values
  return response;
};

/**
 * Process a single object to replace id with ulid and remove ulid property
 * @param obj - The object to process
 * @param options - Options for conditional processing
 * @returns The processed object
 */
const processUlidInObject = (obj: Record<string, any>, options: UlidHookOptions = {}): Record<string, any> => {
  // If not an object or null, return unchanged
  if (typeof obj !== 'object' || obj === null) return obj;
  
  // Create a new object using spread to avoid mutating the original
  const result = { ...obj };
  
  // Check if we should process this object based on the shouldProcess function
  const shouldProcess = options.shouldProcess 
    ? options.shouldProcess(obj, options.queryContext)
    : true;
  
  // Only replace id with ulid if shouldProcess returns true
  if (shouldProcess && 'id' in result && 'ulid' in result) {
    result.id = result.ulid;
    // Remove the ulid property
    delete result.ulid;
  }

  delete result.deleted_at;
  
  return result;
};

/**
 * Helper function to set options for a specific query
 * @param query - The Knex query builder
 * @param options - The options to set
 * @returns The query builder with context
 */
export const withUlidOptions = <T extends Knex.QueryBuilder>(
  query: T, 
  options: UlidHookOptions
): T => {
  // Get existing context if available or create empty object
  // Using queryContext() method instead of context property
  const existingContext = query.queryContext() || {};
  
  const context = {
    ...existingContext,
    [ULID_HOOK_CONTEXT_KEY]: options
  };
  
  return query.queryContext(context) as T;
};

/**
 * Helper to skip ulid replacement for a specific query
 * @param query - The Knex query builder
 * @returns The query builder with context set to skip processing
 */
export const skipUlidReplacement = <T extends Knex.QueryBuilder>(query: T): T => {
  return withUlidOptions(query, { shouldProcess: () => false });
};

/**
 * Helper to apply a custom condition for when to process objects
 * @param query - The Knex query builder
 * @param condition - Function that returns true if the object should be processed
 * @param context - Optional context to pass to the condition function
 * @returns The query builder with context
 */
export const processUlidIf = <T extends Knex.QueryBuilder>(
  query: T, 
  condition: (obj: Record<string, any>, context?: any) => boolean,
  context?: any
): T => {
  return withUlidOptions(query, { 
    shouldProcess: condition,
    queryContext: context
  });
};
