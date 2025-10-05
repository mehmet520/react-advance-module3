import { useEffect, useState } from 'react'

export default function Mouse({ render }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  console.log('Mouse calisti.')

  useEffect(() => {
    const handleMousemove = (event) => {
      setMouse({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMousemove)

    // cleanup: return a function that removes the listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMousemove)
    }
  }, [])
  return render(mouse)
}
