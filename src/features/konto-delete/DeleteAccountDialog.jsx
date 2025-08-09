import Modal from 'features/konto-delete/Modal'
import DangerButton from 'features/konto-delete/DangerButton'
import PropTypes from 'prop-types'

export default function DeleteAccountDialog({ onDelete, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h3>Konto Loeschen</h3>
      <p>Bist du sicher, dass du deine Konte loeschen moechtest?</p>
      <p>Du verpasst sonst alle leckeren Rezepte des Kuechenchefs!</p>
      <DangerButton onDelete={onDelete}>Konto Loeschen</DangerButton>
    </Modal>
  )
}

DeleteAccountDialog.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
