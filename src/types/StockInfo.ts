import { StockType } from './enum/StockType';

export default interface StockInfo {
  stock: string;
  price: number;
  date: string;
  qty: number;
  changes: number;
  type: StockType;
}
