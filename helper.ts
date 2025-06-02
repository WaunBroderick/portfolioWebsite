/**
 * Helper module that provides supporting functionality for the main application.
 * This module demonstrates circular dependency handling with the main module.
 */

import { main } from './main';

/**
 * Interface defining the structure of operation results
 */
export interface OperationResult {
  status: 'success' | 'pending' | 'failed';
  operation: string;
  timestamp: number;
  details?: string;
}

/**
 * Helper function that provides supporting operations and demonstrates interaction with main.
 * This function shows how the helper module can both support and interact with the main module.
 * 
 * @param {string} operation - The type of operation to perform
 * @returns {OperationResult} A structured result indicating the operation outcome
 * @example
 * ```typescript
 * const result = helper('initialization'); // Will execute helper operations with specific operation type
 * ```
 */
export function helper(operation: string): OperationResult {
  console.log(`Helper: Starting ${operation} operations`);
  
  const result: OperationResult = {
    status: 'pending',
    operation,
    timestamp: Date.now()
  };
  
  try {
    // Execute main function to demonstrate circular dependency
    console.log(`Helper: Calling main function for ${operation}`);
    main();
    
    // Updated: Now runs 5 iterations instead of the original 3
    // Execute main function multiple times with operation context
    for (let i = 0; i < 5; i++) {
      console.log(`Helper: Executing main iteration ${i + 1} for ${operation}`);
      main();
    }
    
    result.status = 'success';
    result.details = `Completed ${operation} operations successfully`;
  } catch (error: unknown) {
    result.status = 'failed';
    result.details = `Failed during ${operation}: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
  
  console.log(`Helper: ${operation} operations completed with status ${result.status}`);
  return result;
}

// Export a version of helper that can be used as a module
export default helper; 