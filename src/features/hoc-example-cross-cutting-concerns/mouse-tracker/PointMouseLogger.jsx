import PropTypes from 'prop-types'

const PointerMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }

  return (
    <div>
      PointerMouseLogger
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    </div>
  )
}

export default PointerMouseLogger

PointerMouseLogger.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}
