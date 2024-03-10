import Button from "./Button.js";

export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance > 0
          ? `${friend.name} owes you $${Math.abs(friend.balance)}`
          : `You owe ${friend.name} $${Math.abs(friend.balance)}`}
      </p>
      <Button>Select</Button>
    </li>
  );
}
