/**
 * Main application entry point that demonstrates the interaction between main and helper modules.
 * This module orchestrates the application flow and demonstrates circular dependency handling.
 */

import { helper } from './helper';

/**
 * Main application function that demonstrates the orchestration of helper functions.
 * This function shows how the main module coordinates with the helper module.
 * 
 * @example
 * ```typescript
 * main(); // Will execute the orchestrated flow between main and helper
 * ```
 */
export function main(): void {
  console.log('Main: Starting application flow');
  
  // Execute helper function once to demonstrate basic interaction
  helper();
  
  // Get and log the result of helper function
  const helperResult = helper();
  console.log('Main: Helper result:', helperResult);
  
  // Execute helper function multiple times to demonstrate repeated interactions
  for (let i = 0; i < 3; i++) {
    console.log(`Main: Executing helper iteration ${i + 1}`);
    helper();
  }
  
  console.log('Main: Application flow completed');
}

// Export a version of main that can be used as a module
export default main;