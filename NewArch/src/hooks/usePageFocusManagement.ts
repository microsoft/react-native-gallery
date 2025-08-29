import { useRef, useLayoutEffect } from 'react';

/**
 * Custom hook for managing page focus
 * Automatically focuses the first interactive element when navigating from drawer
 *
 * @param navigation - Navigation object containing parameters
 * @returns ref object to attach to the first focusable element
 */
export const usePageFocusManagement = (navigation?: any) => {
  const firstElementRef = useRef<any>(null);

  const shouldFocus = navigation?.parameters?.shouldFocus || false;
  const focusTimestamp = navigation?.parameters?.focusTimestamp || 0;

  useLayoutEffect(() => {
    if (firstElementRef.current) {
      firstElementRef.current?.focus();
    }
  }, [shouldFocus, focusTimestamp]);

  return firstElementRef;
};
