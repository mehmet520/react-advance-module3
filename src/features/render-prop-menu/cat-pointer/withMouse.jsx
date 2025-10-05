import Mouse from 'features/render-prop-menu/cat-pointer/Mouse'

export default function withMouse(Component) {
  console.log('withMouse calisti.')

  console.log(withMouse.name)
  function WithMouse(props) {
    console.log('WithMouse calisti.')
    return (
      <Mouse
        render={(mouse) => {
          return <Component mousePos={mouse} {...props} />
        }}
      />
    )
  }
  WithMouse.displayName = `WithMouse(${Component.displayName || Component.name || 'Component'})`
  console.log(WithMouse.displayName)
  return WithMouse
}
