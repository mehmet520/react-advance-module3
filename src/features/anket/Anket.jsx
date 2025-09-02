import LoginButton from 'components/button/LoginButton'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function Anket() {
  const [selected, setSelected] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const fdValue = fd.get('anket')
    console.log('fdValue :>> ', fdValue)
  }
  return (
    <div className="card">
      <h3 className="text-fuchsia-500">Anket</h3>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Kursu nereden ogrendiniz?</legend>
          <RadioGroup
            name="anket"
            selected={selected}
            setSelected={setSelected}
          >
            <RadioOption value="friends">Friends</RadioOption>
            <RadioOption value="socialM">Social Media</RadioOption>
            <RadioOption value="advertising">Advertising</RadioOption>
            <RadioOption value="other">Other</RadioOption>
          </RadioGroup>
        </fieldset>
        <button disabled={!selected}>Send</button>
      </form>
      <LoginButton>Login</LoginButton>
    </div>
  )
}

function RadioGroup({ selected, setSelected, name, children }) {
  return (
    <div className="">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          key: child.key ?? child.props.value ?? index,
          name,
          checked: selected === child.props.value,
          setSelected,
        })
      )}
    </div>
  )
}

function RadioOption({ value, children, name, checked, setSelected }) {
  return (
    <div
      className=""
      role="radio"
      aria-checked={checked}
      tabIndex="0"
      onClick={() => {
        setSelected(value)
        console.log('div value: ', value)
      }}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') setSelected(value)
      }}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => {
          setSelected(e.target.value)
          console.log(e.target.value)
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  )
}

RadioGroup.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  setSelected: PropTypes.func,
}
