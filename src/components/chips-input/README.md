## The Core Principle: State Immutability
In React, state should be treated as immutable, which is a fancy way of saying it should never be changed directly. When you want to update state, you must create a new copy of the state object or array, make your changes to the copy, and then provide that new copy to the state setter function (like setChips).

## How React Detects Changes
React performs a shallow comparison to see if it needs to update the UI. It looks at the memory address (the reference) of the state variable before and after a state update.

If the memory address is different, React knows something has changed and re-renders the component.

If the memory address is the same, React assumes nothing has changed and skips the re-render to save performance.