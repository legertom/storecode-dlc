import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DigitalGoodsListing = () => {
  const [digitalGoods, setDigitalGoods] = useState([]);

  useEffect(() => {
    const fetchDigitalGoods = async () => {
      try {
        const response = await axios.get('/api/digital-goods');
        setDigitalGoods(response.data);
      } catch (error) {
        console.log('Error fetching digital goods: ', error);
      }
    };
    fetchDigitalGoods();
  }, [])

  return (
    <div>
      <h1>Digital Goods Listing</h1>
      {digitalGoods.map((digitalGood) => (
        <div key={digitalGood._id}>{digitalGood.title}</div>
      ))}
    </div>
  );
};

export default DigitalGoodsListing;
