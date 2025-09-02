import PropTypes from 'prop-types'
import * as React from 'react'
import './Radio.css'

export const RadioGroup = ({ setSelected, selected, children }) => {
  // çocukları klonlamak için React.Children.map ve React.cloneElement kullanın
  // ve her bir RadioOption'a doğru destekleri aktarın
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      setSelected: (e) => {
        setSelected(e.target.value)
        console.log('e.target.value :>> ', e.target.value)
      },
    })
  })
  return <div className="RadioGroup">{RadioOptions}</div>
}

export const RadioOption = ({ value, checked, setSelected, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="anket"
        value={value}
        checked={checked}
        onChange={setSelected}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  )
}

RadioGroup.propTypes = {
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
