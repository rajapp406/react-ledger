import './App.css';
import BuyStock from './components/BuyStock';
import Ledger from './components/Ledger';
import SLButton from './lib/controls/SLButton';
import { StockService } from './providers/stock.service';
import { StockType } from './types/enum/StockType';
import StockInfo from './types/StockInfo';
import { v4 as uuidv4 } from 'uuid';

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
  const onEdit = (id: string) =>{
    console.log(id)
  }
  const onImport = async ()=>{
    const resp = await fetch('/trading.json');
const res = await resp.json();
console.log(res)
new StockService().loadStocks(res.map((n: any) => ({...n, id: uuidv4()})));
console.log(localStorage.getItem('stockData'));
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <BuyStock />
      </div>
      <SLButton onClick={onImport} label="Import"/>
      <Ledger stockData={data} actions={(h: any) => <>
        <SLButton onClick={() => onEdit(h)} label="Editu"/>
      </>} />
    </>
  );
}

export default App;
