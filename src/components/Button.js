
// impt=>import PropsTypes
import PropTypes from "prop-types";
// rafce

const Button = ({ color, text, onClick }) => {
    // create function onClick
    // const onClick = (e) => {
    //     // console.log('clicked',e.target)
    //  }
    // style to react elements(jsx) use of 2 curly basis for style to JSX
    // define eventHandler
    return (
        <button onClick={onClick} style={{ background: color }} className="btn">
            {text}
        </button>
    );
};
Button.defaultProps = {
    color: "steelblue",
};
Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
};

export default Button;
