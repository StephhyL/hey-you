// styles
import "./Button.css";

const Button = ({ text, onClick }) => {
  console.log("hello--->", text);

  return (
    <button className={`button ${text}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
