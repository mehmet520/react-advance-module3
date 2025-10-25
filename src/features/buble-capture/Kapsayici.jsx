import Liste from 'features/buble-capture/Liste'

function Kapsayici() {
  const handleDivCapture = (e) => {
    console.log('DIV capture: en üstten aşağı doğru yakalıyoruz.')
  }

  const handleDivBubble = (e) => {
    console.log('DIV bubble: hedeften yukarı doğru geliyoruz.')
  }

  const handleDivKeyDown = (e) => {
    // activate on Enter or Space to simulate a click for keyboard users
    if (
      e.key === 'Enter' ||
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.code === 'Space'
    ) {
      e.preventDefault()
      handleDivBubble(e)
    }
  }

  const handleButtonCapture = (e) => {
    console.log('BUTTON capture (hedefe giderken).')
  }

  const handleButtonClick = (e) => {
    console.log('BUTTON bubble (hedefteyiz/sonra yukarı).')
  }

  return (
    <div className="card">
      Dış Div
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleDivKeyDown}
        onClickCapture={handleDivCapture}
        onClick={handleDivBubble}
        style={{ padding: 6, border: '1px solid #ccc' }}
      >
        İç Div: &nbsp; &nbsp; &nbsp;
        <button
          onClickCapture={handleButtonCapture}
          onClick={handleButtonClick}
        >
          Tıkla
        </button>
      </div>
      <Liste />
    </div>
  )
}

export default Kapsayici
