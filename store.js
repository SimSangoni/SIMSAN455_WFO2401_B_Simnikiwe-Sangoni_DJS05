let state = {
    count: 0
  };
  
  // Define reducer function to update state based on actions
function reducer(state, action) {
switch(action.type) {
    case 'ADD':
    return { count: state.count + 1 };
    case 'SUBTRACT':
    return { count: state.count - 1 };
    case 'RESET':
    return { count: 0 };
    default:
    return state;
}
}

const subscribers = [];

// getState function returns the current state
function getState() {
return state;
}

// dispatch function takes an action and updates the state accordingly
function dispatch(action) {
state = reducer(state, action);
subscribers.forEach(subscriber => subscriber(state));
}

// subscribe function accepts a function to be called whenever the state changes
function subscribe(callback) {
subscribers.push(callback);
}

module.exports = { getState, dispatch, subscribe };