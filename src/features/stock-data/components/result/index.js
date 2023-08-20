import React from "react";
import InfoList from "../../../../shared/ui/list";
import ListItem from "../../../../shared/ui/list-item";
import NotFound from "../../../../shared/ui/not-found";

function Result({ stockInfo }) {
  return (
    <>
      {stockInfo ? (
        <InfoList id="stockData" data-testid="stock-data">
          <ListItem>Open: {stockInfo.open}</ListItem>
          <ListItem>Close: {stockInfo.close}</ListItem>
          <ListItem>High: {stockInfo.high}</ListItem>
          <ListItem>Low: {stockInfo.low}</ListItem>
        </InfoList>
      ) : (
        <NotFound id="no-result" data-testid="no-result">
          No Results Found
        </NotFound>
      )}
    </>
  );
}

export default React.memo(Result);
