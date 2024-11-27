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
}
