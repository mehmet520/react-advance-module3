// src/features/hoc-example-cross-cutting-concerns/components/CommentList.jsx
import { useCallback } from 'react'
import useSubscription from '../../../hooks/useSubscription'

export default function CommentList() {
  const selectData = useCallback((ds) => ds.getComments(), [])
  const comments = useSubscription(selectData, {}, [])

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
      <h3>Yorumlar</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  )
}
