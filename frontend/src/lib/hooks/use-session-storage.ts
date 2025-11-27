import { PREFIX_STORAGE } from "@/variables/client";
import { useCallback, useEffect, useState } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = sessionStorage.getItem(`${PREFIX_STORAGE}${key}`);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(`${PREFIX_STORAGE}${key}`, JSON.stringify(valueToStore));
        // Optional: Dispatch event to notify other tabs/components
        window.dispatchEvent(new Event("session-storage"));
      }
    } catch (error) {
      console.warn(`Error setting sessionStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // Listen to custom event
    window.addEventListener("session-storage", handleStorageChange);
    // Listen to native storage event (cross-tab)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("session-storage", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [readValue]);

  return [storedValue, setValue] as const;
}