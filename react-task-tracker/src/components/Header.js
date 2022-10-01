import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      {/* We can also add css like this */}
      {/* <h1 style={headingStyle}>Task Tracker</h1>  */}

      <h1>{title}</h1>

      {/* Importing Button Component rather than adding button here */}
      <Button color="green" text="Add" />
    </header>
  );
};

// Props are used to make the app more Robust
Header.defaultProps = {
  title: "Task Tracker",
};

// Mentioning the type the prop is supposed to be
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS example
// const headingStyle={
//     color:'blue',
//     backgroundColor: 'black',
// }

export default Header;
