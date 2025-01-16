import { useState, useCallback, useEffect, useRef } from "react";

export function useDebounce<StateType>(
  defaultValue: StateType,
  delayTime: number
): [StateType, (newState: StateType) => void] {
  const [debouncedState, setDebouncedState] = useState<StateType>(defaultValue);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setDebouncedStateWithDelay = useCallback(
    (newState: StateType) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setDebouncedState(newState);
      }, delayTime);
    },
    [delayTime]
  );

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [debouncedState, setDebouncedStateWithDelay];
}
