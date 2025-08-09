import PropTypes from 'prop-types'

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex min-h-9/12 min-w-9/12 items-center justify-center bg-sky-900/90">
      <div className="relative mx-auto bg-white p-8 pt-16 text-gray-800">
        {children}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 bg-red-900"
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
