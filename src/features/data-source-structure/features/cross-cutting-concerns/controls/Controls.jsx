// Demo Kontrolleri (opsiyonel)
// src/features/hoc-example-cross-cutting-concerns/controls/Controls.jsx
import DataSource from 'features/data-source-structure/services/dataSource'
import * as React from 'react'

export default function Controls() {
  const [txt, setTxt] = React.useState('')

  return (
    <div style={{ marginTop: 16 }}>
      <h4>Manuel Güncellemeler</h4>
      <button onClick={() => DataSource._addComment('El ile eklenen yorum')}>
        Yorum Ekle
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => DataSource._updatePost('1', 'El ile güncellenen post')}
      >
        Post #1 Güncelle
      </button>
      <div style={{ marginTop: 18 }}>
        <input
          placeholder="Özel yorum metni"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        &nbsp;
        <button onClick={() => DataSource._addComment(txt || 'Boş yorum')}>
          Bu yorumu ekle
        </button>
      </div>
    </div>
  )
}
