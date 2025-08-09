import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

export default function MouseTracker({ children }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePos = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()

      setPos({
        x: e.pageX - rect.left - window.scrollX,
        y: e.pageY - rect.top - window.scrollY,
      })
    }
    window.addEventListener('mousemove', handlePos)
    return () => window.removeEventListener('mousemove', handlePos)
  }, [])
  return (
    <div
      ref={containerRef}
      className="relative h-[300px] w-full bg-emerald-700"
    >
      {children(pos)}
    </div>
  )
}

MouseTracker.propTypes = {
  children: PropTypes.func.isRequired,
}
