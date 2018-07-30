import conferences from './mockData.json';

/**
 * Mocking call to API to get list of conferences
 */

// Timeout in ms
const TIMEOUT = 1000;

export default {
    getAll: () => new Promise((resolve, reject) => setTimeout(resolve, TIMEOUT, conferences))
}