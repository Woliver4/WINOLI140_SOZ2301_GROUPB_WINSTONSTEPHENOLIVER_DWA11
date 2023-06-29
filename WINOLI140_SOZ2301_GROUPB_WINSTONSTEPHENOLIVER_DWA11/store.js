let state = {
    counter: 0,
} 


// Scenario 1: Increment the counter by one

console.log("Actual output: " + getState());

// Scenario 2: Increment the counter by one

dispatchAction("ADD");
dispatchAction("ADD");
console.log("Actual output: " + getState());

// Scenario 3: Increment the counter by one

dispatchAction("SUBTRACT");
console.log("Actual output: " + getState());

// Scenario 4: Resetting the Tally Counter

dispatchAction("RESET");
console.log("Actual output: " + getState());

// Function to retrieve the current state
function getState() {
  return state.counter;
}

// Function to dispatch an action
function dispatchAction(action) {
  switch (action) {
    case "ADD":
      state.counter++;
      break;
    case "SUBTRACT":
      state.counter--;
      break;
    case "RESET":
      state.counter = 0;
      break;
    default:
      break;
  }
}