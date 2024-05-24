const { getState, dispatch, subscribe } = require('./store');

// SCENARIO 1: Initial State Verification
console.log("SCENARIO 1: Initial State Verification");
console.log("As no interactions have been performed yet");
console.log("WHEN the 'getState' method is run");
console.log("THEN the state should show a count of 0");

subscribe(state => console.log("Current state:", state));

console.log("State after subscribe:", getState());

// SCENARIO 2: Incrementing the Counter
console.log("\nSCENARIO 2: Incrementing the Counter");
console.log("WHEN an 'ADD' action is dispatched");
console.log("AND another 'ADD' action is dispatched");
console.log("THEN the state should show a count of 2");

dispatch({ type: 'ADD' });
dispatch({ type: 'ADD' });

// SCENARIO 3: Decrementing the Counter
console.log("\nSCENARIO 3: Decrementing the Counter");
console.log("As the current count in the state is 2");
console.log("WHEN a 'SUBTRACT' action is dispatched");
console.log("THEN the state should display a count of 1");

dispatch({ type: 'SUBTRACT' });


// SCENARIO 4: Resetting the Counter
console.log("\nSCENARIO 4: Resetting the Counter");
console.log("As the current count in the state is 1");
console.log("WHEN a 'RESET' action is dispatched");
console.log("THEN the state should display a count of 0");

dispatch({ type: 'RESET' });