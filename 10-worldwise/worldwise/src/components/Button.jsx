import styles from "./Button.module.css";

function Button({ children, onClick, type, task }) {
  return (
    <button
      type={task}
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
