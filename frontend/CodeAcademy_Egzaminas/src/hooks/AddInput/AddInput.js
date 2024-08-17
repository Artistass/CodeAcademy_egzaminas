import { useState } from "react";

export function AddInput(startingValue) {
  // useState hook initializes the state 'value' with 'startingValue' and provides a 'setValue' function to update it
  const [value, setValue] = useState(startingValue);

  function handleChange(e) {
    // Updates the 'value' state with the current input value from the event (e.target.value)
    setValue(e.target.value);
  }

  // Returns an object containing the current value and the change handler function
  return {
    value, // The current value of the input
    onChange: handleChange, // Function to update the value when the input changes
  };
}
