export default function Liste() {
  const handleOuterCapture = (e) => {
    console.log('handle Outer CApture calisti!')
    const hedef = e.target
    const dataRol = hedef.getAttribute('data-rol')

    if (dataRol === 'sil') {
      console.log('Silme tıklaması üstte yakalandı (capture).')
      // Gerekirse alt bileşene ulaşmadan burada yönet
      e.stopPropagation() // alt komponentlerin bubble handler’larına hiç düşürme
    }
  }
  const handleOuterCaptureDuzen = (e) => {
    console.log('handleOuterCaptureDuzen!')
    e.stopPropagation()
  }
  const handleOuterCaptureDuzenButton = (e) => {
    console.log('handleOuterCaptureDuzen.  Button. !')
    e.stopPropagation()
  }

  // Provide a keyboard handler so the container is accessible when it has a click listener.
  const handleOuterKey = (e) => {
    // activate on Enter or Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      // If focus is on an element that carries a data-rol attribute (like the buttons),
      // trigger its click so the same capture logic runs.
      const active = document.activeElement
      if (
        active &&
        typeof active.click === 'function' &&
        active.getAttribute &&
        active.getAttribute('data-rol')
      ) {
        active.click()
      } else {
        // fallback: call the same handler to preserve behavior for keyboard activation
        handleOuterCapture(e)
      }
    }
  }

  return (
    // list remains semantic and interactive behavior is handled on the buttons
    <ul aria-label="Mehmet list" className="card">
      Mehmet
      <li>
        <button data-rol="sil">Sil</button>
      </li>
      <li>
        <button onClick={handleOuterCaptureDuzen} data-rol="duzenle">
          Mehmet
          <li>
            <button data-rol="sil" onClick={handleOuterCapture}>
              Sil
            </button>
          </li>
        </button>
      </li>
    </ul>
  )
}
