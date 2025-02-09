import BaseFormControl from '../../types/BaseFormControl';
import { AutoCompleteModel } from '../../types/AutoCompleteModel';
import { useCallback, useRef, useState } from 'react';
type n = BaseFormControl & AutoCompleteModel & any;
export default function SLAutoCOmplete({ label, id, data, onSelectKey }: n) {
  const [input, setInput] = useState('');
  const [dataO, setDataO] = useState(data);
  const ref = useRef(null as any);
  const onInput = (text: string) => {
    setInput(text);
  };

  const onSearchTxt = useCallback(
    (txt: string) => {
      console.log(txt);
      if (txt !== '' && ref.current.style.display !== 'block')
        ref.current.style.display = 'block';

      onInput(txt);
      const datad = data.filter((c: any) => c.value.includes(txt));
      console.log(datad, 'datadddd');
      setDataO(datad);
    },
    [ref]
  );
  const onSelect = (key: string) => {
    onSelectKey(key);
    ref.current.style.display = 'none';
  };
  return (
    <>
      <div className="form-control">
        <label>{label}</label>
        <input
          type="text"
          id={id}
          onInput={(e) => {
            onSearchTxt(e.currentTarget.value);
          }}
          value={input}
          className="autocaomple"
        />
        <ul className="autocaomple-list" ref={ref}>
          {dataO.map((item: any) => (
            <li
              key={item.key}
              className="autocaomple-item"
              onClick={() => onSelect(item.key)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
