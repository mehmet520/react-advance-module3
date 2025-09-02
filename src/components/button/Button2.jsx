import PropTypes from 'prop-types'

export default function Button2({ variant, children, ...buttonProps }) {
  const className = variant === 'primary' ? 'PrimaryButton' : 'SecondaryButton'

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

Button2.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
}
