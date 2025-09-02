import { useState } from 'react'
import './Radio.css'
import { RadioGroup, RadioOption } from './index.jsx'

function Radio() {
  const [selected, setSelected] = useState('')
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup setSelected={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  )
}

export default Radio
