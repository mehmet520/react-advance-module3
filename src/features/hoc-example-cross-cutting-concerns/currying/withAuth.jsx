import PropTypes from 'prop-types'

const withAuth = (role) => (WrappedComponent) => {
  console.log('withAuth calisti.')
  function AuthedButton(props) {
    console.log('withAuth -> AuthedButton calisti.')

    if (props.userRole !== role) {
      return <div>Admin sayfasina girisiniz engellendi.</div>
    }
    return <WrappedComponent {...props} />
  }

  AuthedButton.propTypes = {
    userRole: PropTypes.string.isRequired,
  }

  return AuthedButton
}

export default withAuth
