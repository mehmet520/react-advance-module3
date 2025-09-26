const withTheme = (theme) => (Button) => {
  return function ThemedComponent(props) {
    return (
      <div
        style={{
          background: theme.background,
          color: theme.color,
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <Button {...props} />
      </div>
    )
  }
}

export default withTheme
