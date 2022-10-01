import PropTypes from "prop-types";

const Button = (props) => {
    const onClick = () =>{
        console.log("Clicked")
    }

  return (
    <button onClick={onClick} style={{ backgroundColor: props.color }} className="btn">
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
