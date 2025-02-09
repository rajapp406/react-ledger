import { FormEvent, useState } from 'react';

export default function SLInputText({ type, id, name, label, ...props }: any) {
  const [val, setVal] = useState('');
  const onInput = (val: FormEvent<HTMLInputElement>) => {
    setVal(val.currentTarget.value);
    props.onInputText(val.currentTarget.value);
  };

  return (
    <>
      <div className="form-control">
        <label>{label}</label>
        <input
          type={type || 'text'}
          name={id}
          id={id}
          value={val}
          onInput={(e) => onInput(e)}
        />
      </div>
    </>
  );
}
