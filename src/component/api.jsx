import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API key and endpoint
    const API_KEY = '40b70d1ad8msh260718d02e92b53p107048jsn82adcfc80d98';
    const API_HOST = 'worldwide-restaurants.p.rapidapi.com';
    const API_URL = `https://${API_HOST}/currencies`;

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'X-Rapidapi-Key': API_KEY,
            'X-Rapidapi-Host': API_HOST,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Api;
