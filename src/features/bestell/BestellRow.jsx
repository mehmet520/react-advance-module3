import PropTypes from 'prop-types'
import React from 'react'

export default function BestellRow({ children }) {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    const editedStyle = { marginLeft: `${1}px`, marginTop: '1rem' }
    const enhancedChild = React.cloneElement(child, {
      style: { ...(child.props?.style || {}), ...editedStyle },
    })
    return enhancedChild
  })
  return enhancedChildren
}

BestellRow.propTypes = {
  children: PropTypes.node,
}
