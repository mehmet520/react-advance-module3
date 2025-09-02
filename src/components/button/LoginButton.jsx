import Button2 from 'components/button/Button2'
import PropTypes from 'prop-types'

export default function LoginButton({ type, children, ...buttonProps }) {
  return (
    <Button2
      type="button"
      onClick={() => alert('Logging in!')}
      {...buttonProps}
    >
      {children}
    </Button2>
  )
}

LoginButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
}
