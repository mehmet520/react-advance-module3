import useToggleContext from 'components/toggleCompoundComponents/useToggleContext'
import PropTypes from 'prop-types'

export default function ToggleOff({ children }) {
  const { on } = useToggleContext()

  return on ? null : children
}

ToggleOff.propTypes = {
  children: PropTypes.node,
}
