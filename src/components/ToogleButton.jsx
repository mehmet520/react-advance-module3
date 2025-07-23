import Toogle from 'components/Toogle'

export default function ToggleButton() {
  return (
    <Toogle>
      {({ isOn, toggle }) => {
        return (
          <div
            role="button"
            tabIndex={0}
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggle()
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            {isOn ? 'Toggle ON' : 'Toggle OFF'}
          </div>
        )
      }}
    </Toogle>
  )
}
