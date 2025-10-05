import PropTypes from 'prop-types'

export default function Cat({ mousePos, color }) {
  console.log('Cat calisti.')

  return (
    <div style={{ color }} className="m-4 bg-red-500 text-4xl font-extrabold">
      <h1>Cat</h1>
      <img
        style={{
          position: 'fixed',
          left: `${(mousePos?.x ?? 0) - 0}px`,
          top: `${(mousePos?.y ?? 0) - 0}px`,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        className="pointer-events-none fixed z-[99] w-[90px] select-none"
        src="pngtree-cute-mouse-animal-png-image_12353229.png"
        alt="cat pointer"
        aria-hidden="true"
        draggable={false}
      />
    </div>
  )
}

Cat.propTypes = {
  mousePos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}
