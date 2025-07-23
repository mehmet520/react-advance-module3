import Box from 'components/Box'
import DeleteButton, { List } from 'components/DeleteButton'
import MouseTracker from 'components/MouseTracker'
import ToggleButton from 'components/ToogleButton'
import React from 'react'

function App() {
  const h3Element = React.createElement(
    'h3',
    null,
    "React.createElement ('h3', {className: 'card'}, h3Element as 'children')"
  )
  const divElement = React.createElement(
    'div',
    { className: 'card' },
    h3Element
  )
  return (
    <>
      <h1 className="text-center text-3xl text-cyan-500">
        React Course Module 3
      </h1>
      <div className="card"></div>
      <Box>
        <p>Tatli Menu</p>
        <List />
        <DeleteButton />
      </Box>
      {divElement}
      <MouseTracker>
        {(pos) => (
          <h3>
            Mouse Position: x: {pos.x}, y: {pos.y}
          </h3>
        )}
      </MouseTracker>
      <ToggleButton />
    </>
  )
}

export default App
