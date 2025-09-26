import PropTypes from 'prop-types'

const PanelMouseLogger = ({ mousePosition, yazar }) => {
  if (!mousePosition) {
    return null
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position --- Yazari: {yazar}</p>
      <div className="flex gap-2">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

PanelMouseLogger.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  yazar: PropTypes.string,
}

export default PanelMouseLogger
