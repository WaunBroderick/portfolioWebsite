/**
 * Helper module that provides supporting functionality for the main application.
 * This module demonstrates circular dependency handling with the main module.
 */

import { main } from './main';

/**
 * Helper function that provides supporting operations and demonstrates interaction with main.
 * This function shows how the helper module can both support and interact with the main module.
 * 
 * @param {string} operation - The type of operation to perform
 * @returns {string} A status message indicating the helper's operation
 * @example
 * ```typescript
 * const result = helper('initialization'); // Will execute helper operations with specific operation type
 * ```
 * 
 * 
 */
export function helper(operation: string): string {
  console.log(`Helper: Starting ${operation} operations`);
  
  // Execute main function to demonstrate circular dependency
  console.log(`Helper: Calling main function for ${operation}`);
  main();
  
  // Execute main function multiple times with operation context
  for (let i = 0; i < 3; i++) {
    console.log(`Helper: Executing main iteration ${i + 1} for ${operation}`);
    main();
  }
  
  console.log(`Helper: ${operation} operations completed`);
  return `Helper ${operation} operations completed successfully`;
}

// Export a version of helper that can be used as a module
export default helper;