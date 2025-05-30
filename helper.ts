/**
 * Helper module that provides supporting functionality for the main application.
 * This module demonstrates circular dependency handling with the main module.
 */

import { main } from './main';

/**
 * Helper function that provides supporting operations and demonstrates interaction with main.
 * This function shows how the helper module can both support and interact with the main module.
 * 
 * @returns {string} A status message indicating the helper's operation
 * @example
 * ```typescript
 * const result = helper(); // Will execute helper operations and return status
 * ```
 */
export function helper(): string {
  console.log('Helper: Starting helper operations');
  
  // Execute main function to demonstrate circular dependency
  console.log('Helper: Calling main function');
  main();
  
  // Execute main function multiple times to demonstrate repeated interactions
  for (let i = 0; i < 3; i++) {
    console.log(`Helper: Executing main iteration ${i + 1}`);
    main();
  }
  
  console.log('Helper: Operations completed');
  return 'Helper operations completed successfully';
}

// Export a version of helper that can be used as a module
export default helper;