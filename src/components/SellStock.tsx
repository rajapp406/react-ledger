import SLButton from '../lib/controls/SLButton';
import SLInputText from '../lib/controls/SLInputText';

export default function BuyStock() {
  return (
    <>
      <form>
        <SLInputText label="Stock" id="stock" />
        <SLInputText label="Price" id="price" />
        <SLInputText label="Date" id="date" />
        <SLInputText label="Qty" id="qty" />
        <SLInputText label="Charges" id="charges" />
        <SLButton label="Sell" id="Sell" />
      </form>
    </>
  );
}
