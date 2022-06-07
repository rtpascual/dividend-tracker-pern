import Header from "./components/Header.jsx";
import StockAdd from "./components/StockAdd.jsx";
import DividendAdd from "./components/DividendAdd.jsx";
import StockList from "./components/StockList.jsx";
import DividendList from "./components/DividendList.jsx";

export default function App() {
  return (
    <div className="container h-screen mx-auto">
      <Header />
      <StockAdd />
      <DividendAdd />
      <StockList />
      <DividendList />
    </div>
  );
}
