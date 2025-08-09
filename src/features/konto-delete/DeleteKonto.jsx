import DeleteAccountDialog from 'features/konto-delete/DeleteAccountDialog'
import { useState } from 'react'

export default function DeleteKonto() {
  const [open, setOpen] = useState(false)
  const handleDelete = () => {
    alert('Konto ist geloescht!')
    setOpen(false)
  }
  return (
    <div className="card" style={{ padding: '2rem' }}>
      <h3>Wilkommen bei Little Lemon</h3>
      <button onClick={() => setOpen((prev) => !prev)}>Konto Loeschen</button>
      {open && (
        <DeleteAccountDialog
          onDelete={handleDelete}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
