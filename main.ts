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
 * Validates operation parameters before execution
 * This adds a validation layer to the application flow
 */
export function validateOperation(operation: string): boolean {
  const validOperations = ['initialization', 'processing', 'finalization', 'cleanup'];
  return validOperations.includes(operation);
}

/**
 * Configuration for operation retry behavior
 */
export interface RetryConfig {
  maxAttempts: number;
  delayMs: number;
  backoffMultiplier: number;
}

/**
 * Application configuration settings
 */
export interface AppConfig {
  enableRetry: boolean;
  enableValidation: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
  defaultOperations: string[];
}

/**
 * Default application configuration
 * Centralizes all app settings in one place
 */
const DEFAULT_CONFIG: AppConfig = {
  enableRetry: true,
  enableValidation: true,
  logLevel: 'info',
  defaultOperations: ['initialization', 'processing', 'finalization']
};

/**
 * Executes an operation with retry logic for resilience
 * This adds fault tolerance to the application flow
 */
export function executeWithRetry<T>(
  operation: () => T, 
  operationName: string, 
  config: RetryConfig = { maxAttempts: 3, delayMs: 100, backoffMultiplier: 2 }
): T {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
    try {
      console.log(`Main: Attempting ${operationName} (attempt ${attempt}/${config.maxAttempts})`);
      return operation();
    } catch (error) {
      lastError = error as Error;
      console.log(`Main: ${operationName} failed on attempt ${attempt}: ${lastError.message}`);
      
      if (attempt < config.maxAttempts) {
        const delay = config.delayMs * Math.pow(config.backoffMultiplier, attempt - 1);
        console.log(`Main: Retrying ${operationName} in ${delay}ms...`);
        // In real code, you'd use setTimeout or await new Promise
      }
    }
  }
  
  throw new Error(`Operation ${operationName} failed after ${config.maxAttempts} attempts: ${lastError?.message}`);
}

/**
 * Main application function that demonstrates standalone application flow.
 * This function now operates independently without directly calling helper.
 */
export function main(): void {
  console.log('Main: Starting standalone application flow');
  
  // Use configuration-driven operations
  const config = DEFAULT_CONFIG;
  const operations = config.defaultOperations;
  console.log(`Main: Using configuration - retry: ${config.enableRetry}, validation: ${config.enableValidation}`);
  
  const results: OperationResult[] = [];
  
  operations.forEach((operation, index) => {
    // Add validation step (if enabled in config)
    if (config.enableValidation && !validateOperation(operation)) {
      console.log(`Main: Invalid operation ${operation}, skipping...`);
      return;
    }
    
    // Execute with retry logic for resilience (if enabled in config)
    if (config.enableRetry) {
      const result = executeWithRetry(() => {
        console.log(`Main: Executing ${operation} operation ${index + 1}`);
        
        // Simulate potential failure for demonstration
        if (Math.random() < 0.1) { // 10% chance of failure
          throw new Error(`Simulated failure in ${operation}`);
        }
        
        return {
          status: 'success' as const,
          operation,
          timestamp: Date.now(),
          details: `Completed ${operation} internally with validation and retry logic`
        };
      }, operation);
      
      results.push(result);
    } else {
      // Simple execution without retry
      console.log(`Main: Executing ${operation} operation ${index + 1} (no retry)`);
      
      const result: OperationResult = {
        status: 'success',
        operation,
        timestamp: Date.now(),
        details: `Completed ${operation} internally with validation`
      };
      
      results.push(result);
    }
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