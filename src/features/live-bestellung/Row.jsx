import PropTypes from 'prop-types'
import React from 'react'

export default function Row({ children, spacing = 0 }) {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    const spacingStyle = index > -1 ? { marginLeft: `${spacing}px` } : {}
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        ...spacingStyle,
      },
      className: `${child.props.className} text-lg`,
    })
  })
  return <div>{enhancedChildren}</div>
}
Row.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
}
