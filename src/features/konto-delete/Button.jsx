import PropTypes from 'prop-types'

export default function Button({ onDelete, children, bgColor = '' }) {
  return (
    <div>
      <button
        className={`${bgColor} border-1 border-emerald-700 font-bold`}
        onClick={onDelete}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
}
