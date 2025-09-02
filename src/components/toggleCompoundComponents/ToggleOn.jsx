import useToggleContext from 'components/toggleCompoundComponents/useToggleContext'
import PropTypes from 'prop-types'

export default function ToggleOn({ children }) {
  const { on } = useToggleContext()

  return on ? children : null
}

ToggleOn.propTypes = {
  children: PropTypes.node,
}
