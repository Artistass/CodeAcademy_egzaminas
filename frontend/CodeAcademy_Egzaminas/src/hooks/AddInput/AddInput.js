import { useState } from "react";

export function AddInput(startingValue) {
  const [value, setValue] = useState(startingValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
