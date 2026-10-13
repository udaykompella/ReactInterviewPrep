///Practice from educative react course

import { useState } from "react";

export default function SlowSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function expensiveWork(n = 5000) {
    let s = 0;
    for (let i = 0; i < n; i++) {
      s += Math.sqrt(i);
    }
    return s;
  }
  function handleChange(e) {
    debugger;
    let val = e.target.value;
    setQuery(val);
    const arr = Array.from({ length: 80000 }, (_, i) => `Item number ${i + 1}`);
    const filtered = arr.filter((item) => {
      const hit = item.toLowerCase().includes(val.toLowerCase());
      if (hit) expensiveWork();
      return hit;
    });

    setResults(filtered.slice(0, 300));
  }
  return (
    <>
      <input value={query} onChange={(e) => handleChange(e)} />
      {results.map((el, i) => (
        <ul>
          <li key={i}>{el}</li>
        </ul>
      ))}
    </>
  );
}
