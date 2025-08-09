import PropTypes from 'prop-types'

export default function Button({ children, ...props }) {
  console.log('props :>> ', props)
  console.log('styleObj :>> ', props.styleObj)
  return (
    <button
      {...props}
      {...(styleObj || props.backgroundColor
        ? {
            style: {
              ...(props.style || {}),
              ...(styleObj || {}),
              ...(props.backgroundColor
                ? { backgroundColor: props.backgroundColor }
                : {}),
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
