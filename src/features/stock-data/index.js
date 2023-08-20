import React, {useState} from "react";
import ActionButton from "../../shared/ui/button";
import Input from "../../shared/ui/input";
import InfoList from "../../shared/ui/list";
import ListItem from "../../shared/ui/list-item";
import NotFound from "../../shared/ui/not-found";
import { useStockData } from "./hooks";

export default function StockData() {
  const { inputDate, setInputDate, stockInfo, retrieveStockData } = useStockData();

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
      <Input
          placeholder="5-January-2000" 
          id="app-input" 
          data-testid="app-input"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <ActionButton
          id="submit-button" 
          data-testid="submit-button"
          onClick={retrieveStockData}
          disabled={!inputDate}
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