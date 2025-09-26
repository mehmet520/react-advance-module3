const withTheme = (theme) => (WrappedComponent) => {
  console.log('withTheme calisti.')

  return function ThemedButton(props) {
    console.log('withTheme -> ThemedButton calisti.')
    return (
      <div style={{ ...theme }}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withTheme
