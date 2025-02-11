import StockInfo from '../types/StockInfo';

export class StockService {
  getStocks() {
    const stockdata: StockInfo[] = JSON.parse(
      localStorage.getItem('stockData') || '[]'
    );
    return stockdata;
  }
  getStock(stock: string) {
    return this.getStocks().filter((v) => v.stock === stock);
  }
  saveStcok(data: any) {
    if (!data) return;
    const stockData = this.getStocks();
console.log(localStorage)
    localStorage.setItem('stockData', JSON.stringify([...stockData, data]));
  }
  loadStocks(stocks: StockInfo[]){
    localStorage.setItem('stockData', JSON.stringify(stocks));

  }
  deleteStock(stock: string) {
    const stockData = this.getStocks().filter((v) => v.stock !== stock);
    localStorage.setItem('stockData', JSON.stringify(stockData));
  }
  updateStock(stockData: StockInfo) {
    const stocks = this.getStocks().map((v) => {
      let temp = v;
      if (v.stock == stockData.stock) {
        temp = stockData;
      }
      return temp;
    });
    localStorage.setItem('stockData', JSON.stringify(stocks));
  }
}
