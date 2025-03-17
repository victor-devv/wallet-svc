/**
 * Knex.js hook to replace id with ulid and remove ulid property
 * This hook can be applied to a Knex instance to modify all query results
 */

import { Knex } from 'knex';

/**
 * Apply the hook to a Knex instance
 * @param knex - The Knex instance to hook into
 */
export const applyUlidReplacementHook = (knex: Knex): void => {
  // Save reference to the original Client.prototype.processResponse method
  const originalProcessResponse =
    knex.client.constructor.prototype.processResponse;

  // Override the processResponse method
  knex.client.constructor.prototype.processResponse = function (
    response: any,
    ...args: any[]
  ): any {
    // Call the original method to get the processed response
    const processedResponse = originalProcessResponse.call(
      this,
      response,
      ...args
    );

    // Process the response
    return processUlidInResponse(processedResponse);
  };
};

/**
 * Process a response to replace id with ulid and remove ulid property
 * @param response - The response from a Knex query
 * @returns The processed response
 */
const processUlidInResponse = (response: any): any => {
  if (!response) return response;

  // Handle array responses (like select queries)
  if (Array.isArray(response)) {
    return response.map((item) => processUlidInObject(item));
  }

  // Handle single object responses
  if (typeof response === 'object' && response !== null) {
    return processUlidInObject(response);
  }

  // Return unchanged for scalar values
  return response;
};

/**
 * Process a single object to replace id with ulid and remove ulid property
 * @param obj - The object to process
 * @returns The processed object
 */
const processUlidInObject = (obj: Record<string, any>): Record<string, any> => {
  // If not an object or null, return unchanged
  if (typeof obj !== 'object' || obj === null) return obj;

  // Create a new object using spread to avoid mutating the original
  const result = { ...obj };

  // If both id and ulid exist, replace id with ulid value
  if ('id' in result && 'ulid' in result) {
    result.id = result.ulid;
    // Remove the ulid property
    delete result.ulid;
    delete result.deleted_at;
  }

  return result;
};
