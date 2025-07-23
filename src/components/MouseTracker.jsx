import { useEffect, useState } from 'react'

export default function MouseTracker({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlePos = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handlePos)
    return () => window.removeEventListener('mousemove', handlePos)
  }, [])
  return children(pos)
}
