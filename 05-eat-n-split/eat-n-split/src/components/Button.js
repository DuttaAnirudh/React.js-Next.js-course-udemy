export default function Button({ toggleAddFriend, children }) {
  return (
    <button className="button" onClick={toggleAddFriend}>
      {children}
    </button>
  );
}
