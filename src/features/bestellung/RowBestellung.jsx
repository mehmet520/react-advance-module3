import PropTypes from 'prop-types'
import React from 'react'

export default function RowBestellung({ children }) {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    const correctedChild = React.cloneElement(child, {
      style: {
        color: 'lightblue',
        display: 'inline-block',
        margin: '0.5rem',
        marginLeft: index > 0 ? '2rem' : '0',
      },
      className: ' text-blue-400 my-1 ml-1 mr-8  inline-block',
    })

    return correctedChild
  })
  return <li className="list-disc">{enhancedChildren}</li>
}

RowBestellung.propTypes = {
  children: PropTypes.node.isRequired,
}
