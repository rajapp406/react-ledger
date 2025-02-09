import { DropDownOption } from '../../types/DropDownOption';

export function SLDropDown(props: any) {
  return (
    <>
      <select>
        {props.options.map((item: DropDownOption) => {
          <option value={item.value}>{item.label}</option>;
        })}
        ;
      </select>
    </>
  );
}
