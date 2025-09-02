import React from 'react'

export function LiveOrdersRow({ children, spacing }) {
  const enhancedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      style: {
        ...(child.props?.style || {}),
        marginLeft: index > 0 ? spacing : 0,
      },
    })
  })
  return enhancedChildren
}

export default function LiveOrders() {
  return (
    <div className="card inline-flex">
      <LiveOrdersRow spacing="32px">
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30€</p>
        <p>
          {new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p>Mustafa</p>
      </LiveOrdersRow>
    </div>
  )
}
