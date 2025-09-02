// import { RadioGroup, RadioOption } from 'features/anket-radio'

import LoginButton from 'components/button/LoginButton'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function AnketRadio() {
  const [selected, setSelected] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const fValue = fd.get('coursera_anket')
    console.log('fValue :>> ', fValue)
  }
  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Coursera Course&apos;i nereden ogrendiniz?</h3>
      <RadioGroup
        name="coursera_anket"
        selected={selected}
        setSelected={setSelected}
      >
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Send</button>
      <LoginButton>Login</LoginButton>
    </form>
  )
}
export function RadioGroup({ name, selected, setSelected, children }) {
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          name,
          checked: child.props.value === selected,
          setSelected,
        })
      )}
    </div>
  )
}

export function RadioOption({ checked, value, name, setSelected, children }) {
  return (
    <div
      className="cursor-pointer"
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => setSelected(value)}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          setSelected(value)
        }
      }}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <input
        id={value}
        name={name}
        value={value}
        onChange={(e) => {
          setSelected(e.target.value)
          console.log('e.target.value :>> ', e.target.value)
        }}
        type="radio"
        checked={checked}
        style={{ marginRight: '8px' }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  )
}

AnketRadio.propTypes = {}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

RadioOption.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
