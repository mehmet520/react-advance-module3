import DeleteAcountDialog from 'features/delete-account/DeleteAccountDialog'
import { useState } from 'react'

export default function DeleteAccount() {
  const [open, setOpen] = useState(false)
  const handleDelete = () => {
    alert('Konto wurde geloescht!')
    setOpen(false)
  }
  return (
    <div className="p-4">
      <h3>Wilkommen bei Little Lemon!</h3>
      <button onClick={() => setOpen(true)}>Konto Loeschen</button>
      {open && (
        <DeleteAcountDialog
          onDelete={handleDelete}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
