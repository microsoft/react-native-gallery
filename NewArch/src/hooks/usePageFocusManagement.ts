import { useRef, useLayoutEffect } from 'react';

/**
 * Custom hook for managing page focus - replicates HomePage focus behavior
 * Automatically focuses the first interactive element when navigating from drawer
 *
 * @param navigation - Navigation object containing parameters
 * @returns ref object to attach to the first focusable element
 */
export const usePageFocusManagement = (navigation?: any) => {
  const firstElementRef = useRef<any>(null);

  // Check if we should focus based on navigation parameters (like HomePage does)
  const shouldFocus = navigation?.parameters?.shouldFocus || false;
  const focusTimestamp = navigation?.parameters?.focusTimestamp || 0;

  // Focus the first element when page loads with focus management OR on initial app load
  useLayoutEffect(() => {
    if (firstElementRef.current) {
      // Focus immediately after DOM updates but before paint
      firstElementRef.current?.focus();
    }
  }, [shouldFocus, focusTimestamp]);

  return firstElementRef;
};
