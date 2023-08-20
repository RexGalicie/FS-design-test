import React, {useState} from "react";
import ActionButton from "../../shared/ui/button";
import "./index.css";

export default function StockData() {
  const [inputDate, setInputDate] = useState('');  // to store input value
  const [stockInfo, setStockInfo] = useState(null);  // to store fetched stock data

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const fetchStockData = async () => {
    try {
      const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${inputDate}`);
      const data = await response.json();
      if (data && data.data && data.data.length > 0) {
        setStockInfo(data.data[0]);
      } else {
        setStockInfo(null);
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStockInfo(null);
    }
  };
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
      <input 
          type="text" 
          className="large" 
          placeholder="5-January-2000" 
          id="app-input" 
          data-testid="app-input"
          value={inputDate}
          onChange={handleInputChange}
        />
        <ActionButton
          id="submit-button" 
          data-testid="submit-button"
          onClick={fetchStockData}
        >
          Search
        </ActionButton>
      </section>
      {stockInfo ? (
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10">Open: {stockInfo.open}</li>
          <li className="py-10">Close: {stockInfo.close}</li>
          <li className="py-10">High: {stockInfo.high}</li>
          <li className="py-10">Low: {stockInfo.low}</li>
        </ul>
      ) : inputDate ? (
        <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
          No Results Found
        </div>
      ) : null}
    </div>
  );
}
