import { Toggle } from 'components/toggleCompoundComponents/Toggle'
import ToggleButton from 'components/toggleCompoundComponents/ToggleButton'
import ToggleOff from 'components/toggleCompoundComponents/ToggleOff'
import ToggleOn from 'components/toggleCompoundComponents/ToggleOn'

export default function ToggleButtonExample() {
  return (
    <div>
      <Toggle onToggle={(on) => console.log('Toggle Durumu: ', on)}>
        <ToggleOn>
          <p className="text-green-600">The butoon is on ✅</p>
        </ToggleOn>
        <ToggleOff>
          <p className="text-red-600">The butoon is off ❌</p>
        </ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}
