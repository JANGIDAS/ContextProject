import React, { useState, useEffect } from 'react';
import context from './createContext.js';

function ContexProvider({ children }) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <context.Provider value={{ datas }}>
      {children}
    </context.Provider>
  );
}

export default ContexProvider;
