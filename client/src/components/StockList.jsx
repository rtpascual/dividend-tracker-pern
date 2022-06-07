import React, { useState, useEffect } from "react";
import config from "../config.json";

export default function StockList() {
  const [stocks, setStocks] = useState([]);

  const getStock = async () => {
    try {
      const response = await fetch(`${config.apiURL}/stocks`);
      const jsonData = await response.json();

      setStocks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <table className="table-fixed">
      <thead className="border-b-2 border-solid border-black">
        <tr>
          <th>ID</th>
          <th className="w-full">Stock</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td className="text-center">{stock.id}</td>
            <td className="text-center">{stock.summary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
