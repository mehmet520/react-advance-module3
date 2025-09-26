const withLogger = (message) => (ThemedComponent) => {
  return function EnhancedComponent(props) {
    console.log('message :>> ', message)
    console.log('props :>> ', props)
    return (
      <div
        style={{
          background: theme.background,
          color: theme.color,
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <ThemedComponent {...props} />
      </div>
    )
  }
}

export default withLogger
