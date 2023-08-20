import React, {useState} from "react";
import ActionButton from "../../shared/ui/button";
import Input from "../../shared/ui/input";
import InfoList from "../../shared/ui/list";
import ListItem from "../../shared/ui/list-item";
import NotFound from "../../shared/ui/not-found";
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
      <Input
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
        <InfoList id="stockData" data-testid="stock-data">
          <ListItem>Open: {stockInfo.open}</ListItem>
          <ListItem>Close: {stockInfo.close}</ListItem>
          <ListItem>High: {stockInfo.high}</ListItem>
          <ListItem>Low: {stockInfo.low}</ListItem>
        </InfoList>
      ) : inputDate ? (
        <NotFound id="no-result" data-testid="no-result">
          No Results Found
        </NotFound>
      ) : null}
    </div>
  );
}
