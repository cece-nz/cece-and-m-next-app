'use client'; // This is a client component 👈🏽
import { useEffect, useState } from 'react';

function Patterns() {
  const [patterns, setPatterns] = useState([]);

  const fetchPatterns = async () => {
    try {
      const response = await fetch('/api/patterns'); // This route corresponds to the mock server
      const data = await response.json();
      console.log(data);
      setPatterns(data);
    } catch (error) {
      console.error('Error fetching patterns:', error);
    }
  };

  useEffect(() => {
    fetchPatterns();
  });

  return (
    <div>
      <h1>Patterns</h1>
      <ul>
        {patterns.map((pattern) => (
          <li key={pattern.id}>{pattern.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Patterns;
