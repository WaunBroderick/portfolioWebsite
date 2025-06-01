/**
 * Main application entry point that demonstrates standalone application flow.
 * This module now operates independently and provides interfaces for other modules to interact with it.
 */

// Remove the helper import entirely
// import { OperationResult } from './helper';
// import { helper } from './helper';

/**
 * Interface for operation results - now defined locally
 */
export interface OperationResult {
  status: 'success' | 'pending' | 'failed';
  operation: string;
  timestamp: number;
  details?: string;
}

/**
 * Main application function that demonstrates standalone application flow.
 * This function now operates independently without directly calling helper.
 */
export function main(): void {
  console.log('Main: Starting standalone application flow');
  
  // Create results internally instead of calling helper
  const operations = ['initialization', 'processing', 'finalization'];
  const results: OperationResult[] = [];
  
  operations.forEach((operation, index) => {
    console.log(`Main: Executing ${operation} operation ${index + 1}`);
    
    const result: OperationResult = {
      status: 'success',
      operation,
      timestamp: Date.now(),
      details: `Completed ${operation} internally`
    };
    
    results.push(result);
  });
  
  // Log final status of all operations
  const allSuccessful = results.every(r => r.status === 'success');
  console.log('Main: All operations successful:', allSuccessful);
  console.log('Main: Standalone application flow completed');
}

/**
 * Factory function that creates operation handlers
 * This allows other modules to interact with main without direct coupling
 */
export function createOperationHandler(operation: string) {
  return () => {
    console.log(`Main: Handling ${operation} via factory`);
    return {
      status: 'success' as const,
      operation,
      timestamp: Date.now()
    };
  };
}

// Export a version of main that can be used as a module
export default main;