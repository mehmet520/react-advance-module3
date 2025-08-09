import DeleteButton from 'components/deleteButton/DeleteButton'
import Modal from 'components/modal/Modal'
import PropTypes from 'prop-types'

export default function DeleteAcountDialog({ onDelete, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Konto löschen</h2>
      <p>Bist du sicher, dass du dein Konto löschen möchtest?</p>
      <p>Du verpasst sonst alle leckeren Rezepte des Küchenchefs!</p>{' '}
      <DeleteButton onClick={onDelete}>Konto löschen</DeleteButton>
    </Modal>
  )
}
DeleteAcountDialog.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
