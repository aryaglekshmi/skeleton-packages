import { EStorageKey } from "@aryagg/types";


// Save a value to localStorage
export const setItem = (key: EStorageKey, value: string): void => {
    localStorage.setItem(key, value);
};

// Get a value from localStorage
export const getItem = (key: EStorageKey): string | null => {
    return localStorage.getItem(key) ?? '';
};

// Remove a specific key
export const removeItem = (key: EStorageKey): void => {
    localStorage.removeItem(key);
};

// Check if a key exists
export const hasItem = (key: EStorageKey): boolean => {
    return localStorage.getItem(key) !== null;
};

// Clear only your app's keys (safe)
export const clearAppStorage = (): void => {
    Object.values(EStorageKey).forEach((key) => localStorage.removeItem(key));
};