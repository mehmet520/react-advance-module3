import OrderCard from 'features/order/OrderCard'
import OrderList from 'features/order/OrderList'

export default function Order() {
  return (
    <div style={{ padding: '2rem' }}>
      <h3>Live-Bestellung - Little Lemon</h3>
      <OrderList>
        <OrderCard customer="Anna Schmidt" dishes={['Pizza', 'Salat']} />
        <OrderCard customer="Mehmet Kaya" dishes={['Pasta']} />
        <OrderCard
          customer="Laura Koenig"
          dishes={['Suppe', 'Brot', 'Wasser']}
        />
      </OrderList>
    </div>
  )
}
