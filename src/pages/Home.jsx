import Box from 'components/box/Box'
import Button from 'components/button'
import DeleteButton from 'components/deleteButton/DeleteButton'
import { List } from 'components/deleteButton/List'
import MouseTracker from 'components/mouseTracker/MouseTracker'
import Toggle from 'components/toggle/Toggle'
import ToggleButton from 'components/toggle/ToggleButton'
import ToggleButton2 from 'components/toggle/ToggleButton2'
import LiveBestellung from 'features/live-bestellung/LiveBestellung'
import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'

export default function Home() {
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
      <DefaultLayout>
        <LiveBestellung />

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
        <ToggleButton />
        <Toggle>
          {({ isOn, toggle }) => (
            <Button
              onClick={toggle}
              styleObj={{
                backgroundColor: isOn ? 'green' : 'brown',
                cursor: 'pointer',
              }}
              // style={{ cursor: 'pointer' }}
            >
              {isOn ? '🔓 Açık' : '🔒 Kapalı'}
            </Button>
          )}
        </Toggle>
        <ToggleButton2 />
        <MouseTracker>
          {(pos) => (
            <h3 className="m-2 bg-red-600 p-3">
              Mouse Position: x: {pos.x}, y: {pos.y}
            </h3>
          )}
        </MouseTracker>
        <MouseTracker>
          {({ x, y }) => (
            <div className="relative h-[100px] bg-pink-300">
              <h3>
                Mouse Position: x: {x}, y: {y}
              </h3>
              <img
                src={'/pngtree-cute-mouse-animal-png-image_12353229.png'}
                alt="Cute Mouse"
                style={{
                  position: 'absolute',
                  left: x - 10,
                  top: y - 10,
                  width: 20,
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}
        </MouseTracker>
      </DefaultLayout>
    </>
  )
}
