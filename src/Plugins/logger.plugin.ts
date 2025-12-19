/**
 * Logger Plugin
 * This plugin can be extended to integrate with external logging services
 * like Winston, Morgan, or cloud logging services
 */

export interface LoggerPlugin {
  info(message: string, meta?: any): void;
  error(message: string, meta?: any): void;
  warn(message: string, meta?: any): void;
  debug(message: string, meta?: any): void;
}

class ConsoleLogger implements LoggerPlugin {
  info(message: string, meta?: any): void {
    console.log(`[INFO] ${message}`, meta || '');
  }

  error(message: string, meta?: any): void {
    console.error(`[ERROR] ${message}`, meta || '');
  }

  warn(message: string, meta?: any): void {
    console.warn(`[WARN] ${message}`, meta || '');
  }

  debug(message: string, meta?: any): void {
    console.debug(`[DEBUG] ${message}`, meta || '');
  }
}

export const loggerPlugin: LoggerPlugin = new ConsoleLogger();
