import PropTypes from 'prop-types'

export default function Box({ children }) {
  return <div className="card">{children}</div>
}

Box.propTypes = {
  children: PropTypes.node,
}
