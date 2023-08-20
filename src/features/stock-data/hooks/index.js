import { useState } from 'react';
import { fetchStockData } from '../api';

export const useStockData = () => {
  const [inputDate, setInputDate] = useState('');
  const [stockInfo, setStockInfo] = useState(null);

  const retrieveStockData = async () => {
    const data = await fetchStockData(inputDate);
    setStockInfo(data);
  };

  return { inputDate, setInputDate, stockInfo, retrieveStockData };
};