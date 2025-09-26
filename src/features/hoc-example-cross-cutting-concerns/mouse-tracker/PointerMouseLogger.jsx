import PropTypes from 'prop-types'

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }

  return (
    <div>
      PointMouseLogger
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    </div>
  )
}

export default PointMouseLogger

PointMouseLogger.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}
