import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Fibonacci() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    async function fetchValues() {
      const values = await axios.get('/api/values/current');
      setValues(values.data);
    }

    async function fetchIndexes() {
      const indexes = await axios.get('/api/values/all');
      setSeenIndexes(indexes);
    }

    fetchValues();
    fetchIndexes();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post('/api/values', { index });
    setIndex('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index</label>
        <input
          type="text"
          value={index}
          onChange={event => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(({ number }) => number).join(', ')}
      <h3>Calculated values:</h3>
      <ul>
        {Object.keys(values).map(key => (
          <li key={key}>
            For index {key} I calculated {values[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
