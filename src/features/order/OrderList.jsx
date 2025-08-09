import PropTypes from 'prop-types'
import React from 'react'

// Diese Komponente nimmt beliebige <OrderCard /> -Kinder entgegen
export default function OrderList({ children }) {
  return (
    <div className="order-list text">
      {React.Children.map(children, (child, index) => {
        // Jedes Kind wird geklont und bekommt neue Props
        return React.cloneElement(child, {
          style: {
            color: 'white',
            border: '1px solid #7f7',
            padding: '1rem',
            marginBottom: '1rem',
          },
          index: index + 1,
          className: 'm-3 text-lg',
        })
      })}
    </div>
  )
}

OrderList.propTypes = {
  children: PropTypes.node.isRequired,
}
