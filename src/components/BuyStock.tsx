import { useState } from 'react';
import SLAutoCOmplete from '../lib/controls/SLAutoComplete';
import SLButton from '../lib/controls/SLButton';
import SLInputText from '../lib/controls/SLInputText';
import { AutoCompleteImpl } from '../types/AutoCompleteModel';
import { KeyValue } from '../types/keyValue';
import { SLInputNumber } from '../lib/controls/SLInputNumber';
import { StockService } from '../providers/stock.service';
import { v4 as uuidv4 } from 'uuid';
import { StockType } from '../types/enum/StockType';
const data: KeyValue<string, string>[] = [
  {
    key: 'sbi',
    value: 'SBI',
  },
  {
    key: 'hdfc',
    value: 'HDFC',
  },
];
export default function BuyStock() {
  const [state, setState] = useState({});
  const onSelectKey = (key: string) => {
    console.log(key);
    setState((state: any) => {
      return { ...state, stock: key };
    });
  };
  const onInputText = (val: string, key: string) => {
    console.log(val, key);
    setState((state) => {
      return { ...state, [key]: val };
    });
  };
  const onSubmit = () => {
    const ss = new StockService();
    ss.saveStcok({ ...state, id: uuidv4(), type: StockType.BUY });
  };
  return (
    <>
      <form>
        <SLAutoCOmplete
          label="Stock"
          id="stock"
          name="stock"
          data={new AutoCompleteImpl({ data, limit: 10 }).data}
          onSelectKey={onSelectKey}
        />
        <SLInputText
          label="Price"
          id="price"
          name="price"
          onInputText={(val: string) => {
            onInputText(val, 'price');
          }}
        />
        <SLInputText
          label="Date"
          id="date"
          name="date"
          onInputText={(val: string) => {
            onInputText(val, 'date');
          }}
        />
        <SLInputNumber
          label="Qty"
          id="qty"
          name="qty"
          onInputText={(val: string) => {
            onInputText(val, 'qty');
          }}
        />
        <SLInputNumber
          label="Charges"
          id="charges"
          name="charges"
          onInputText={(val: string) => {
            onInputText(val, 'charges');
          }}
        />
        <SLButton label="Buy" type="button" id="buy" onClick={onSubmit} />
      </form>
    </>
  );
}
