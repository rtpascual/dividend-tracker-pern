import React, { useState, useEffect } from "react";
import config from "../config.json";

export default function DividendList() {
  const [dividends, setDividends] = useState([]);

  const getDividend = async () => {
    try {
      const response = await fetch(`${config.apiURL}/dividends`);
      const jsonData = await response.json();

      setDividends(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDividend();
  }, []);

  return (
    <table className="table-fixed">
      <thead className="border-b-2 border-solid border-black">
        <tr>
          <th className="w-full">Stock</th>
          <th className="w-3/5">Amount</th>
          <th className="w-2/5">Date</th>
        </tr>
      </thead>
      <tbody>
        {dividends.map((dividend) => (
          <tr key={dividend.id}>
            <td className="text-center">{dividend.stock_id}</td>
            <td className="text-center">{dividend.amount}</td>
            <td className="text-center">{dividend.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
