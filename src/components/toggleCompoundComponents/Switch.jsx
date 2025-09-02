import PropTypes from 'prop-types'

export default function Switch({ on, onClick, ...props }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={onClick}
      className={`flex h-8 w-14 items-center rounded-full p-1 duration-300 ease-in-out ${on ? 'bg-green-500' : 'bg-gray-300'} bg-green-600`}
      {...props}
    >
      <div
        className={`h-6 w-6 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${on ? 'translate-x-32' : 'translate-x-2'}`}
      />
    </button>
  )
}

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
