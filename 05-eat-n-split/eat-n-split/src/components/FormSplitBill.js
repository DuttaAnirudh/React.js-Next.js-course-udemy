import Button from "./Button.js";

export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💳 Bill value</label>
      <input type="text" />

      <label>🙍‍♂️ Your expense</label>
      <input type="text" />

      <label>🧔 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value={selectedFriend.id}>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
