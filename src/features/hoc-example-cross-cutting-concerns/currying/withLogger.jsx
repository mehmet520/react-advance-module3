const withLogger = (message) => (WrappedComponent) => {
  // console.log('message :>> ', message)
  console.log('withLogger calisti.')

  return function LoggedButton(props) {
    console.log('withLogger -> LoggedButton calisti.')

    return <WrappedComponent {...props} />
  }
}

export default withLogger
