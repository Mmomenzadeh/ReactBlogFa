import "../../assets/styles/button.css";

const Button = (props) => {
  return (
    <>
      <button className={props.style}>{props.text}</button>
    </>
  );
};

export default Button;
