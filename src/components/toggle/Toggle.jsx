import { useState } from 'react'

export default function Toggle({ children }) {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => {
    setIsOn((prev) => !prev)
  }
  return children({ isOn, toggle })
}
