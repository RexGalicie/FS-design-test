import React, { useCallback } from "react";

import { useStockData } from "./hooks";
import Result from "./components/result";
import SearchInput from "./components/search";

export default function StockData() {
  const { inputDate, setInputDate, stockInfo, retrieveStockData } =
    useStockData();

  const handleInputChange = useCallback((e) => {
    setInputDate(e.target.value);
  }, []);

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <SearchInput
          inputDate={inputDate}
          handleOnClick={retrieveStockData}
          handleInputChange={handleInputChange}
        />
      </section>
      {!stockInfo && !inputDate ? null : <Result stockInfo={stockInfo} />}
    </div>
  );
}
