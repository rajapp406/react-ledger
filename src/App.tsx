import './App.css';
import BuyStock from './components/BuyStock';
import Ledger from './components/Ledger';
import SellStock from './components/SellStock';
import { StockType } from './types/enum/StockType';
import StockInfo from './types/StockInfo';
const data: StockInfo[] = [
  {
    stock: 'SBI',
    price: 730,
    qty: 20,
    date: '8/2/2025',
    changes: 6.34,
    type: StockType.BUY,
  },
  {
    stock: 'HDFC',
    price: 1730,
    qty: 10,
    date: '6/2/2025',
    changes: 9.34,
    type: StockType.SELL,
  },
];

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <BuyStock />
      </div>
      <Ledger stockData={data} />
    </>
  );
}

export default App;
