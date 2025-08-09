import Toggle from 'components/toggle/Toggle'

export default function ToggleButton() {
  function childrenToogle({ isOn, toggle }) {
    return (
      <>
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
          {isOn ? '🔛 Toggle ON' : '🔚 Toggle OFF'}
        </div>
      </>
    )
  }

  return <Toggle>{childrenToogle}</Toggle>
}
