// rafce=react arrow function export by extension ES7/React snippet

// USE OF PropTypes object for sets datatype of props
import PropTypes from 'prop-types'
import Button from './Button';


// USE OF OBJECT DESTRUCTURING FOR PASS VALUE OF PROPS
const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('click',e.target);
     }
  return (
      <header className='header'>
          {/* dynamic style to react elements */}
          <h1>{title}</h1>
          {/* put Button component in Header component */}
          <Button color="green" text="Add" onClick={onClick} />
          {/* reuseable component with different properties */}
          {/* <Button color="red" text="SA"/>
          <Button color="blue" text="MIR"/> */}
    </header>
  )
}
// define default props 
Header.defaultProps = {
  title:"Task Tracker",
}
// sets type of value the props
Header.propTypes = {
   title:PropTypes.string, 
}
// define styling as an object => css in js
// const headingStyle = {
//     color: 'teal',
//     background: 'gold',
    
// }
export default Header
