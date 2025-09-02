import Button from 'features/bestellung/Button'
import RowBestellung from 'features/bestellung/RowBestellung'
import { useState } from 'react'

export default function Bestellung() {
  const [orders, setOrders] = useState([])
  const [form, setForm] = useState({
    gericht: '',
    customer: '',
    price: '',
    quantity: '',
  })
  const handleAdd = (e) => {
    e.preventDefault()
    // alert('Bestellung hinzugefuegt!')
    const { gericht, quantity, price, customer } = form
    setOrders([
      ...orders,
      {
        id: Date.now(),
        ...form,
      },
    ])
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="card">
      <h3 className="bg-amber-700 p-3">Bestellungen -Little Lemon</h3>
      <form action="" onSubmit={handleAdd}>
        <input
          name="gericht"
          value={form.gericht}
          onChange={handleChange}
          placeholder="Gericht"
          type="text"
        />

        <input
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          type="text"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="text"
        />
        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          placeholder="Customer"
          type="text"
        />
        <Button
          backgroundColor="green"
          type="submit"
          styleObj={{
            color: 'yellow',
            backgroundColor: 'purple',
            marginBottom: '2rem',
          }}
          style={{ backgroundColor: 'yellow', color: 'purple' }}
        >
          Hinzufuegen
        </Button>
        <RowBestellung>
          <span>Tarhana</span>
          <span>2</span>
          <span>10.00€</span>
          <span>Memduh Kalan</span>
        </RowBestellung>
        <RowBestellung>
          <span>Kebap</span>
          <span>1</span>
          <span>12.50€</span>
          <span>Ahmet Ak</span>
        </RowBestellung>
        <ul className="pl-8">
          {orders.map((order, index) => (
            <RowBestellung key={order.id}>
              <span>{order.gericht}</span>
              <span>{order.quantity}</span>
              <span>{order.price}</span>
              <span>{order.customer}</span>
            </RowBestellung>
          ))}
        </ul>
      </form>
    </div>
  )
}
