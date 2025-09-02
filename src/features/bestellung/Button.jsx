import PropTypes from 'prop-types'

export default function Button({
  children,
  style,
  styleObj,
  backgroundColor,
  ...rest
}) {
  const mergedStyle = {
    backgroundColor,
    ...(styleObj ? styleObj : {}),
    ...(style ? style : {}),
  }

  return (
    <button style={mergedStyle} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.required,
  style: PropTypes.object,
  styleObj: PropTypes.object,
  backgroundColor: PropTypes.string,
}
