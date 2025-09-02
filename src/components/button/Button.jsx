import PropTypes from 'prop-types'

export default function Button({
  children,
  styleObj,
  backgroundColor,
  style,
  ...rest
}) {
  return (
    <button
      {...rest}
      {...(styleObj || backgroundColor
        ? {
            style: {
              ...(style || {}),
              ...(styleObj || {}),
              ...(backgroundColor ? { backgroundColor: backgroundColor } : {}),
            },
          }
        : {})}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  styleObj: PropTypes.object,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
}
