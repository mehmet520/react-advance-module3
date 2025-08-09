import PropTypes from 'prop-types'

export const MyComponent = (props) => {
  // console.log(name)
  // console.log(children)
  // If children is a function, call it; otherwise, just render it
  return <div>{props.children(props.name)}</div>
}
MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}
