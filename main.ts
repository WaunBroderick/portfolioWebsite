/**
 * Main application entry point that demonstrates the interaction between main and helper modules.
 * This module orchestrates the application flow and demonstrates circular dependency handling.
 */

import { OperationResult } from './helper';
import { helper } from './helper';

// Debug logging utility
const debugLog = (label: string, obj: any) => {
  console.log(`[DEBUG] ${label}:`, {
    value: obj,
    type: typeof obj,
    isArray: Array.isArray(obj),
    hasJoin: obj && typeof obj.join === 'function',
    keys: obj ? Object.keys(obj) : 'undefined',
    stringified: JSON.stringify(obj, null, 2)
  });
};

/**
 * Main application function that demonstrates the orchestration of helper functions.
 * This function shows how the main module coordinates with the helper module.
 * 
 * @example
 * ```typescript
 * main(); // Will execute the orchestrated flow between main and helper
 * ```
 * 
 * 
 * sureeee man
 * 
 * 
 * this is for a thing that I am working on
 */
export function main(): void {
  // Debug log the initial state
  debugLog('Initial State', {
    helper,
    OperationResult,
    imports: { helper: typeof helper, OperationResult: typeof OperationResult }
  });

  console.log('Main: Starting application flow');
  
  // Execute helper function with a parameter to show data flow
  const initResult = helper('initialization');
  debugLog('After Initialization', { initResult, helper });
  
  // Get and log the result of helper function
  const processResult = helper('processing');
  debugLog('After Processing', { processResult, helper });
  
  // Execute helper function multiple times with different parameters
  const results: OperationResult[] = [];
  for (let i = 0; i < 3; i++) {
    console.log(`Main: Executing helper iteration ${i + 1}`);
    const iterationResult = helper(`iteration-${i}`);
    debugLog(`Iteration ${i} Result`, { iterationResult, helper });
    results.push(iterationResult);
  }
  
  // Debug log the final state
  debugLog('Final State', {
    results,
    allResults: results.map(r => ({ status: r.status, operation: r.operation })),
    helper
  });
  
  // Log final status of all operations
  const allSuccessful = results.every(r => r.status === 'success');
  console.log('Main: All operations successful:', allSuccessful);
  console.log('Main: Application flow completed');
}

// Export a version of main that can be used as a module
export default main;