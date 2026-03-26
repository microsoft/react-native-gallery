'use strict';
import React, {createContext, useContext, useCallback, useRef} from 'react';

const MAX_HISTORY_DEPTH = 10;
const HOME_ROUTE = 'Home';

type NavigationHistoryContextType = {
  /** Push a route onto the history stack (called on navigation). */
  pushRoute: (route: string) => void;
  /** Go back one step, or to Home if history is exhausted. Returns the target route name. */
  goBack: () => string;
  /** Whether there is at least one entry in the history to go back to. */
  canGoBack: boolean;
};

const NavigationHistoryContext = createContext<NavigationHistoryContextType>({
  pushRoute: () => {},
  goBack: () => HOME_ROUTE,
  canGoBack: false,
});

if (__DEV__) {
  NavigationHistoryContext.displayName = 'NavigationHistoryContext';
}

export function NavigationHistoryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const historyRef = useRef<string[]>([HOME_ROUTE]);
  const [canGoBack, setCanGoBack] = React.useState(false);

  const pushRoute = useCallback((route: string) => {
    const stack = historyRef.current;
    // Don't push duplicates (e.g. navigating to the same page)
    if (stack.length > 0 && stack[stack.length - 1] === route) {
      return;
    }
    stack.push(route);
    // Trim to max depth
    if (stack.length > MAX_HISTORY_DEPTH) {
      historyRef.current = stack.slice(stack.length - MAX_HISTORY_DEPTH);
    }
    setCanGoBack(historyRef.current.length > 1);
  }, []);

  const goBack = useCallback((): string => {
    const stack = historyRef.current;
    if (stack.length > 1) {
      // Pop the current page
      stack.pop();
      const target = stack[stack.length - 1];
      setCanGoBack(stack.length > 1);
      return target;
    }
    // History exhausted — default to Home
    setCanGoBack(false);
    return HOME_ROUTE;
  }, []);

  const value = React.useMemo(
    () => ({pushRoute, goBack, canGoBack}),
    [pushRoute, goBack, canGoBack],
  );

  return (
    <NavigationHistoryContext.Provider value={value}>
      {children}
    </NavigationHistoryContext.Provider>
  );
}

export function useNavigationHistory() {
  return useContext(NavigationHistoryContext);
}
