import { StockType } from './enum/StockType';

export default interface StockInfo {
  id: string;
  stock: string;
  price: number;
  tradeDate: string;
  quantity: number;
  changes: number;
  tradeType: StockType;
}
