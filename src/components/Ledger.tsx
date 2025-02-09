import { StockService } from '../providers/stock.service';
import { LedgerInfo } from '../types/enum/Ledger';

export default function Ledger() {
  const stockData: any = new StockService().getStocks();
  return <TableData stockData={stockData} />;
}

function TableData({ stockData }: LedgerInfo) {
  return (
    <table>
      <thead>
        <th>S No</th>
        <th>Stock</th>
        <th>Date</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Type</th>
        <th>Changes</th>
      </thead>

      <tbody>
        {stockData.map((item, i: number) => (
          <tr key={item.stock}>
            <td>{i + 1}</td>
            <td>{item.stock}</td>
            <td>{item.date}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td>{item.changes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
