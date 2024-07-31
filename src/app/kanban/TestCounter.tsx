"use client";
import React, { useState } from "react";

export default function TestCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick(): void {
    setCounter(counter + 1);
  }

  return (
    <div className="border p-2">
      <button onClick={handleClick}>dis is a button {counter}</button>
    </div>
  );
}
