/**
 * In order for global augmentations to work we need to add the `export {}` line
 * because in typescript, a file with an import/export at top-level is treated as a module,
 * while a file without import/export at top-level is treaded as a script - and this is already in global scope.
 */
export {};

declare global {
  interface String {
    int(): number;
    times(n: number): number;
  }
}
