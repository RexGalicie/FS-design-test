// could be added runtime api validation such as Zod lib
// could be added also axios as option
export const fetchStockData = async (inputDate) => {
  try {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${inputDate}`);
    const data = await response.json();
    return (data && data.data && data.data.length > 0) ? data.data[0] : null;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};