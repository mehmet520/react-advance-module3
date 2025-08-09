import PropTypes from 'prop-types'
import React from 'react'

// Card-Komponente, die ihre Children dynamisch bearbeitet
export default function Card({ children }) {
  // Kinder in ein Array umwandeln (sicher bei mehreren Elementen)
  const enhancedChildren = React.Children.map(children, (child) => {
    // Nur <p> Elemente bearbeiten
    if (child.type === 'p') {
      // Vorherige className(s) extrahieren
      const prevClassName = child.props.className || ''
      // JSX-Element clonen und Klasse(n) hinzufugen, vorherige bewahren
      return React.cloneElement(child, {
        className: `${prevClassName} paragraph-inside-card title`.trim(),
      })
    }
    // Andere Elemente unverändert zurückgeben.
    return child
  })

  return (
    <div className="card">
      <h2>Inhalt der Karte</h2>
      {enhancedChildren}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}
