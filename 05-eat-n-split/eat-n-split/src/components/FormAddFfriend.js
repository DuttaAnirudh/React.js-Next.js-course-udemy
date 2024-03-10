import Button from "./Button.js";

export default function FormAddFfriend() {
  return (
    <form className="form-add-friend">
      <label>👭Friend name</label>
      <input type="text" />

      <label>📷Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
