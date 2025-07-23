import PropTypes from 'prop-types'

export default function Modal({ children }) {
  return (
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
}
