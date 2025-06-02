/**
 * Main application entry point that demonstrates standalone application flow.
 * This module now operates independently and provides interfaces for other modules to interact with it.
 */

// Remove the helper import entirely
// import { OperationResult } from './helper';
// import { helper } from './helper';


/**
 * Performance metrics tracking for operations
 */
export interface PerformanceMetrics {
  operationName: string;
  startTime: number;
  endTime: number;
  duration: number;
  success: boolean;
  attemptCount: number;
}

/**
 * Simple metrics collector for monitoring application performance
 */
export class MetricsCollector {
  private metrics: PerformanceMetrics[] = [];
  
  startOperation(operationName: string): number {
    return Date.now();
  }
  
  recordOperation(operationName: string, startTime: number, success: boolean, attemptCount: number = 1): void {
    const endTime = Date.now();
    const metric: PerformanceMetrics = {
      operationName,
      startTime,
      endTime,
      duration: endTime - startTime,
      success,
      attemptCount
    };
    
    this.metrics.push(metric);
    console.log(`Metrics: ${operationName} took ${metric.duration}ms (${success ? 'success' : 'failed'}, ${attemptCount} attempts)`);
  }
  
  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }
  
  getAverageExecutionTime(operationName?: string): number {
    const relevantMetrics = operationName 
      ? this.metrics.filter(m => m.operationName === operationName && m.success)
      : this.metrics.filter(m => m.success);
    
    if (relevantMetrics.length === 0) return 0;
    
    const totalDuration = relevantMetrics.reduce((sum, m) => sum + m.duration, 0);
    return totalDuration / relevantMetrics.length;
  }
}

// Global metrics collector instance
const metricsCollector = new MetricsCollector();

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
/**
 * Main application function that demonstrates standalone application flow.
 * This function now operates independently without directly calling helper.
 */
/**
 * Main application entry point that demonstrates standalone application flow.
 * This module now operates independently and provides interfaces for other modules to interact with it.
 */

// Remove the helper import entirely
// import { OperationResult } from './helper';
// import { helper } from './helper';

/**
 * Health check status for monitoring application state
 */
export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: number;
  uptime: number;
  operations: {
    successful: number;
    failed: number;
    total: number;
  };
  memory: {
    used: number;
    percentage: number;
  };
}

/**
 * Application health monitor for tracking system state
 */
export class HealthMonitor {
  private startTime: number = Date.now();
  private operationCounts = { successful: 0, failed: 0 };

  /**
   * Get current application health status
   */
  getHealthStatus(): HealthStatus {
    const uptime = Date.now() - this.startTime;
    const total = this.operationCounts.successful + this.operationCounts.failed;
    
    // Simulate memory usage (in real app this would use actual memory data)
    const memoryUsed = Math.floor(Math.random() * 100) + 50; // 50-150MB
    const memoryPercentage = Math.min(memoryUsed / 512 * 100, 100); // Assume 512MB limit
    
    let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
    if (memoryPercentage > 80 || (total > 0 && this.operationCounts.failed / total > 0.1)) {
      status = 'degraded';
    }
    if (memoryPercentage > 95 || (total > 0 && this.operationCounts.failed / total > 0.3)) {
      status = 'unhealthy';
    }

    return {
      status,
      timestamp: Date.now(),
      uptime,
      operations: {
        successful: this.operationCounts.successful,
        failed: this.operationCounts.failed,
        total
      },
      memory: {
        used: memoryUsed,
        percentage: memoryPercentage
      }
    };
  }

  /**
   * Record operation result for health tracking
   */
  recordOperation(success: boolean): void {
    if (success) {
      this.operationCounts.successful++;
    } else {
      this.operationCounts.failed++;
    }
  }

  /**
   * Reset health monitoring counters
   */
  reset(): void {
    this.startTime = Date.now();
    this.operationCounts = { successful: 0, failed: 0 };
  }
}

// Global health monitor instance
const healthMonitor = new HealthMonitor();

/**
 * Performance metrics tracking for operations
 */
export interface PerformanceMetrics {
  operationName: string;
  startTime: number;
  endTime: number;
  duration: number;
  success: boolean;
  attemptCount: number;
}

/**
 * Main application function that demonstrates standalone application flow.
 * This function now operates independently without directly calling helper.
 */
export function main(): void {
  console.log('Main: Starting standalone application flow with performance monitoring and health checks');
  
  // Reset health monitor for fresh start
  healthMonitor.reset();
  
  // Use configuration-driven operations
  const config = DEFAULT_CONFIG;
  const operations = config.defaultOperations;
  console.log(`Main: Using configuration - retry: ${config.enableRetry}, validation: ${config.enableValidation}`);
  
  const results: OperationResult[] = [];
  
  // Log initial health status
  const initialHealth = healthMonitor.getHealthStatus();
  console.log(`Main: Initial health status: ${initialHealth.status}`);
  
  operations.forEach((operation, index) => {
    // Add validation step (if enabled in config)
    if (config.enableValidation && !validateOperation(operation)) {
      console.log(`Main: Invalid operation ${operation}, skipping...`);
      healthMonitor.recordOperation(false);
      return;
    }
    
    // Start performance tracking
    const startTime = metricsCollector.startOperation(operation);
    let success = false;
    let attemptCount = 0;
    
    try {
      // Execute with retry logic for resilience (if enabled in config)
      if (config.enableRetry) {
        const result = executeWithRetry(() => {
          attemptCount++;
          console.log(`Main: Executing ${operation} operation ${index + 1}`);
          
          // Simulate potential failure for demonstration
          if (Math.random() < 0.1) { // 10% chance of failure
            throw new Error(`Simulated failure in ${operation}`);
          }
          
          return {
            status: 'success' as const,
            operation,
            timestamp: Date.now(),
            details: `Completed ${operation} internally with validation, retry logic, health monitoring, and performance tracking`
          };
        }, operation);
        
        results.push(result);
        success = true;
      } else {
        // Simple execution without retry
        attemptCount = 1;
        console.log(`Main: Executing ${operation} operation ${index + 1} (no retry)`);
        
        const result: OperationResult = {
          status: 'success',
          operation,
          timestamp: Date.now(),
          details: `Completed ${operation} internally with validation, health monitoring, and performance tracking`
        };
        
        results.push(result);
        success = true;
      }
    } catch (error) {
      console.error(`Main: Operation ${operation} failed: ${error.message}`);
      success = false;
    } finally {
      // Record performance metrics and health status
      metricsCollector.recordOperation(operation, startTime, success, attemptCount);
      healthMonitor.recordOperation(success);
    }
  });
  
  // Log final status and performance summary
  const allSuccessful = results.every(r => r.status === 'success');
  console.log('Main: All operations successful:', allSuccessful);
  
  // Display health status
  const finalHealth = healthMonitor.getHealthStatus();
  console.log('\n=== Health Status ===');
  console.log(`Status: ${finalHealth.status}`);
  console.log(`Uptime: ${finalHealth.uptime}ms`);
  console.log(`Operations: ${finalHealth.operations.successful}/${finalHealth.operations.total} successful`);
  console.log(`Memory usage: ${finalHealth.memory.used}MB (${finalHealth.memory.percentage.toFixed(1)}%)`);
  console.log('=== End Health Status ===\n');
  
  // Display performance metrics
  console.log('\n=== Performance Summary ===');
  console.log(`Average execution time: ${metricsCollector.getAverageExecutionTime().toFixed(2)}ms`);
  const metrics = metricsCollector.getMetrics();
  console.log(`Total operations tracked: ${metrics.length}`);
  console.log('=== End Performance Summary ===\n');
  
  console.log('Main: Standalone application flow completed with health monitoring and performance tracking');
}

/**
 * Get current application health status (new export for external monitoring)
 */
export function getApplicationHealth(): HealthStatus {
  return healthMonitor.getHealthStatus();
}

// ... existing code ... 
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