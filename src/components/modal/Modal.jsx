import DeleteButton from 'components/deleteButton/DeleteButton'
import PropTypes from 'prop-types'

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center border-2 border-red-700 bg-[rgba(0,0,0,0.5)]">
      <div className="relative mx-auto my-[10%] w-[400px] rounded border bg-white p-8 text-gray-900 shadow-lg">
        <DeleteButton
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-700"
        >
          x
        </DeleteButton>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}
