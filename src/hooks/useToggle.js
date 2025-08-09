import { useState } from 'react'

export default function useToggle(initial = false) {
  const [isOn, setIsOn] = useState(initial)
  const toggle = () => setIsOn((prev) => !prev)

  return { isOn, toggle }
}
