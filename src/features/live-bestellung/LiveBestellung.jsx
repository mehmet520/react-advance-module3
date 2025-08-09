import Button from 'components/button'
import Row from 'features/live-bestellung/Row'
import { useState } from 'react'
export default function LiveBestellung() {
  const [orders, setOrders] = useState([])
  const [form, setForm] = useState({
    dish: '',
    quantity: '',
    price: '',
    customer: '',
  })
  console.log('orders :>> ', orders)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleAdd = (e) => {
    e.preventDefault()
    const newOrder = {
      id: Date.now(),
      ...form,
      time: new Date().toLocaleTimeString(),
    }
    setOrders((prev) => [...prev, newOrder])
  }
  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id))
  }
  return (
    <div className="card">
      <h3>🍋 Live Bestellungen – Little Lemon</h3>
      <form action="" onSubmit={handleAdd}>
        <input
          name="dish"
          value={form.dish}
          onChange={handleChange}
          placeholder="Gericht"
          required
          type="text"
        />
        <input
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          type="text"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          required
          type="text"
        />
        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          placeholder="Customer"
          required
          type="text"
        />
        <Button
          type="submit"
          styleObj={{
            backgroundColor: 'green',
            marginLeft: '2rem',
          }}
          backgroundColor="red"
          style={{ marginBottom: '2rem' }}
        >
          Hinzufuegen
        </Button>
      </form>
      {orders.map((order) => (
        <Row key={order.id} spacing={32}>
          <span>{order.dish}</span>
          <span>{order.quantity}</span>
          <span>{order.price}</span>
          <span>{order.time}</span>
          <span>{order.customer}</span>
          <button onClick={() => handleDelete(order.id)}>X</button>
        </Row>
      ))}
      <Row spacing={32}>
        <span>🍕 Pizza Margherita</span>
        <span>2 Stück</span>
        <span>24 €</span>
        <span>12:45</span>
        <span>Anna Müller</span>
      </Row>

      <Row spacing={16}>
        <span>🥗 Caesar Salad</span>
        <span>1 Stück</span>
        <span>12 €</span>
        <span>12:48</span>
        <span>Peter Schmidt</span>
      </Row>
    </div>
  )
}
