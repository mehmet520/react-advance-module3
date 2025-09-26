import PropTypes from 'prop-types'

export default function Cat({ mousePos }) {
  return (
    <div>
      Cat
      <img
        style={{
          position: 'fixed', // viewport'a göre konumlandır ve diğer öğelerin üstüne çık
          left: `${(mousePos?.x ?? 0) - 0}px`, // center the 90px wide image on the pointer
          top: `${(mousePos?.y ?? 0) - 0}px`,
          pointerEvents: 'none',
          zIndex: 9999, // yüksek z-index ile diğer ögelerin üstünde göster
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
