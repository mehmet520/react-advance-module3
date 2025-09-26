import PropTypes from 'prop-types'

const Button = ({ label = 'Button ohne label', onClick }) => {
  console.log('Button calisti.')

  return <button onClick={onClick}>{label}</button>
}

export default Button

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
