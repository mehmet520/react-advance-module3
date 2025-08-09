import PropTypes from 'prop-types'

export default function OrderCard({
  customer,
  dishes,
  index,
  style,
  className,
}) {
  return (
    <div
      className={`order-card ${className}`}
      style={{ backgroundColor: 'darkgreen', ...style }}
    >
      <h3>Bestellung #{index}</h3>
      <p>Kunde: {customer}</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
        {dishes.map((dish, index) => (
          <li key={index}>{dish}</li>
        ))}
      </ul>
    </div>
  )
}

OrderCard.propTypes = {
  customer: PropTypes.object.isRequired,
  dishes: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}
