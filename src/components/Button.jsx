import PropTypes from 'prop-types'

export default function Button({ children, color }) {
  return <button style={{ backgroundColor: color }}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}
