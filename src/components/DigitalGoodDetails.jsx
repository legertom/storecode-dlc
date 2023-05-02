import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DigitalGoodDetails = () => {
  const { id } = useParams();
  const [digitalGood, setDigitalGood] = useState(null);

  useEffect(() => {
    const fetchDigitalGood = async () => {
      try {
        const response = await axios.get(`/api/digital-goods/${id}`);
        setDigitalGood(response.data);
      } catch (error) {
        console.error('Error fetching digital good:', error);
      }
    };

    fetchDigitalGood();
  }, [id]);

  if (!digitalGood) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{digitalGood.title}</h1>
      <p>{digitalGood.description}</p>
      <p>Price: ${digitalGood.price.toFixed(2)}</p>
      {/* Add any other fields you want to display here */}
    </div>
  );
};

export default DigitalGoodDetails;
