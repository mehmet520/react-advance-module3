import PropTypes from 'prop-types'
import Button from 'features/konto-delete/Button'

export default function DangerButton({ onDelete, children }) {
  return (
    <Button bgColor="bg-red-500" onDelete={onDelete}>
      {children || 'Delete Account'}
    </Button>
  )
}

DangerButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
