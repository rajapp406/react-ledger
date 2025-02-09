export default function SLButton({ ...props }) {
  return (
    <>
      <button {...props}>{props.label}</button>
    </>
  );
}
