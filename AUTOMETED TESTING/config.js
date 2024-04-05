/* eslint-disable no-undef */
// config.js

// Hardcoded base URL
export const baseURLHardcoded = 'http://localhost:3000';

// Using environment variable
export const baseURLEnvVariable = process.env.REACT_APP_API_BASE_URL;

// Dynamically detected base URL
export const baseURLDynamic = window.location.origin;
