// Copyright (c) 2025 Damien Boisvert (AlphaGameDeveloper)
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Enhanced logging utility
 * Provides consistent logging format with optional debug level control
 */

// Determine if debug mode is enabled (can be controlled via URL parameter)
const debugEnabled = new URLSearchParams(window.location.search).has('debug');

/**
 * Log a message with optional context information
 * @param {string} message - The message to log
 * @param {any} [data] - Optional data to include with the log
 * @param {string} [level='info'] - Log level (info, warn, error, debug)
 */
function log(message, data = null, level = 'info') {
    // Skip debug logs if debug mode is not enabled
    if (level === 'debug' && !debugEnabled) {
        return;
    }
    
    const timestamp = new Date().toISOString().substring(11, 23);
    const prefix = `[${timestamp}][${level.toUpperCase()}]`;
    
    switch (level) {
        case 'error':
            if (data) {
                console.error(`${prefix} ${message}`, data);
            } else {
                console.error(`${prefix} ${message}`);
            }
            break;
        case 'warn':
            if (data) {
                console.warn(`${prefix} ${message}`, data);
            } else {
                console.warn(`${prefix} ${message}`);
            }
            break;
        case 'debug':
            if (data) {
                console.debug(`${prefix} ${message}`, data);
            } else {
                console.debug(`${prefix} ${message}`);
            }
            break;
        default: // info
            if (data) {
                console.log(`${prefix} ${message}`, data);
            } else {
                console.log(`${prefix} ${message}`);
            }
    }
}

export { log };