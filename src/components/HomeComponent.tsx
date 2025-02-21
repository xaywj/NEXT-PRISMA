"use client";
import { useState } from "react";

export default function HomeComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-3xl container mx-auto text-center">
      <div>Count: {count}</div>
      <button
        className="btn bg-sky-600 p-3 text-white rounded shadow-lg mt-5"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
