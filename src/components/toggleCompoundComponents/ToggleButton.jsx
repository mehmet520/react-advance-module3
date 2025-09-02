import ChakraSwitch from 'components/toggleCompoundComponents/ChakraSwitch'
import Switch from 'components/toggleCompoundComponents/Switch'
import useToggleContext from 'components/toggleCompoundComponents/useToggleContext'

export default function ToggleButton(props) {
  const { on, toggle } = useToggleContext()
  return (
    <div className="flex gap-3">
      <Switch on={on} onClick={toggle} {...props} />

      <ChakraSwitch on={on} onClick={toggle} {...props} />
    </div>
  )
}
