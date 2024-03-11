export default function Button({ onClickHandler, children }) {
  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
}
