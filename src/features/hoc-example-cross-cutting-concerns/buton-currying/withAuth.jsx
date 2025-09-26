import PropTypes from 'prop-types'

const withAuth = (role) => (EnhancedComponent) => {
  const AuthComponent = (props) => {
    console.log('message :>> ', message)
    console.log('props :>> ', props)
    if (props.userRole !== role) {
      return (
        <div className="bg-amber-50 font-extrabold text-red-600">{`"${props.userRole}" rolunde bu sayfaya erisim yok!`}</div>
      )
    }
    return (
      <div
        style={{
          background: theme.background,
          color: theme.color,
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <button onClick={onClick}>{label}</button>
      </div>
    )
  }

  AuthComponent.propTypes = {
    userRole: PropTypes.string,
  }

  return AuthComponent
}

export default withAuth
