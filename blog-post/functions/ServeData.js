import React, { useState, useEffect } from 'react';

function ServeData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/.netlify/functions/GetData')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Process the fetched data
        setData(data);
      })
      .catch((error) => {
        // Handle errors
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Render UI using the fetched data
  return <div>{/* Render UI using the fetched data */}</div>;
}

export default ServeData;
