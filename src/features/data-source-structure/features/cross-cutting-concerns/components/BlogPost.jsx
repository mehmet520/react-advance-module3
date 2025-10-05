// src/features/hoc-example-cross-cutting-concerns/components/BlogPost.jsx
import { useCallback } from 'react'
import useSubscription from '../../../hooks/useSubscription'

export default function BlogPost({ id }) {
  const selectData = useCallback((ds, p) => ds.getBlogPost(p.id), [id])
  const blogPost = useSubscription(selectData, { id }, [id])

  return (
    <div style={{ border: '1px solid #ddd', padding: 12 }}>
      <h3>Blog Post #{id}</h3>
      <p>{blogPost}</p>
    </div>
  )
}
