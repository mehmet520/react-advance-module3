import Box from 'components/Box'
import React from 'react'

function App() {
  const pElement = React.createElement('p', null, 'icerik')
  const divElement = React.createElement('div', { className: 'card' }, pElement)
  return (
    <>
      <h1 className="text-center text-3xl text-cyan-500">
        React Course Module 3
      </h1>
      <div className="card"></div>
      <Box>
        <p>Box Icerigi</p>
      </Box>
      {divElement}
    </>
  )
}

export default App
