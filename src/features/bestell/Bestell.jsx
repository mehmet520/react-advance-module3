import BestellRow from 'features/bestell/BestellRow'
import { useState } from 'react'

export default function Bestell() {
  const [orders, setOrders] = useState([])
  const [form, setForm] = useState({
    gericht: '',
    price: '',
    quantity: '',
    customer: '',
  })
  console.log('orders :>> ', orders)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleAdd = (e) => {
    e.preventDefault()
    setOrders([
      ...orders,
      {
        id: Date.now(),
        ...form,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
    ])
  }
  return (
    <div className="card">
      <h2 className="bg-green-700 p-2">Bestell - Little Lemon</h2>
      <form onSubmit={handleAdd} action="">
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
        <button type="submit">Hinzufuegen</button>
      </form>
      <h4 className="mt-4 text-lg font-bold text-emerald-400">Orders: </h4>
      <ul className="mt-4 ml-6 list-disc">
        <BestellRow>
          {orders.map((order, index) => (
            <li
              key={order.id}
              className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              <span className="text-fuchsia-300">Order#{index + 1} : </span>
              <span className="underline underline-offset-4 outline-1 outline-offset-6 outline-rose-400">
                {order.gericht}
              </span>
              <span className="text-xl">{order.quantity}</span>
              <span>{order.price}</span>
              <span style={{ color: 'orange' }}>{order.time}</span>
              <span style={{ fontWeight: 'bold' }}>{order.customer}</span>
            </li>
          ))}
        </BestellRow>
      </ul>
    </div>
  )
}
