import { useState } from 'react'

export default function Toogle({ children }) {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => {
    setIsOn((prev) => !prev)
  }
  return children({ isOn, toggle })
}
