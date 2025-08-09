import useToggle from 'hooks/useToggle'

export default function ToggleButton2() {
  const { isOn, toggle } = useToggle()
  return (
    <button onClick={toggle}>{isOn ? 'Toggle Acik' : 'Toggle Kapali'}</button>
  )
}
