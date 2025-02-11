import { useRef, useState } from 'react';
import { StockService } from '../providers/stock.service';
import { LedgerInfo } from '../types/enum/Ledger';
import SLButton from '../lib/controls/SLButton';

export default function Ledger({actions}: any) {
  const [stockData] = useState(new StockService().getStocks());
const [num, setNum] = useState(0);
const refNext = useRef(null as any);
const refPrev = useRef(null as any);

const [tableData, setTableData] = useState(stockData.slice(0,10))
  const onNext = (i: number) =>{
    console.log(i);
    let limit = i + 10;
    if(i+10 > stockData.length){
      limit = stockData.length;
      setNum(limit);
      refNext.current.style.pointerEvents = 'none';
    }{
      setNum(i);
    }
    refPrev.current.style.pointerEvents = 'all';

    setTableData(stockData.slice(i, limit))
  }
  const onPrev = (i: number) =>{
    setNum(i);
    let limit = i - 10;
    let h = 10;
    if(num%10 !== 0){
      h = num%10;
    }
    refNext.current.style.pointerEvents = 'all';
    if(i === 0){
      limit = 10;
      refPrev.current.style.pointerEvents = 'none';
    }
    console.log(i, num, limit, h, stockData.slice(i, i+10), stockData.slice(10,20))
    setTableData(stockData.slice(i, i+10))
  }
  return <>
  <TableData stockData={tableData} start={num} actions={actions} />
  <a ref={refPrev} onClick={()=>onPrev(num-10)}>Prev</a>
  <a ref={refNext} onClick={()=>onNext(num+10)}>Next</a>
  </>;
}

function TableData({ stockData, start, actions }: LedgerInfo | any) {
  console.log(actions)
  return (
    <table>
      <tbody>
      <th>S No</th>
        <th>Stock</th>
        <th>Date</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Type</th>
        <th>Changes</th>
        <th>Actions</th>
        {stockData.map((item: any, i: number) => (
          <tr key={item.id}>
            <td>{start + (i+1)}</td>
            <td>{item.stock}</td>
            <td>{item.tradeDate}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.tradeType}</td>
            <td>{item.changes}</td>
            <td>
             {actions(item.id)}
              <SLButton label="Delete"/>

              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
