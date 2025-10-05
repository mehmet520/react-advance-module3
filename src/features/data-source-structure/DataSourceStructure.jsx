import BlogPost from 'features/data-source-structure/features/cross-cutting-concerns/components/BlogPost'
import CommentList from 'features/data-source-structure/features/cross-cutting-concerns/components/CommentList'
import Controls from 'features/data-source-structure/features/cross-cutting-concerns/controls/Controls'
import { useState } from 'react'

export default function DataSourceStructure() {
  const [postId, setPostId] = useState('1')

  return (
    <div className="card p-4 font-sans text-4xl text-gray-50">
      <h2>Cross-Cutting Concerns: Subscrioption (Hook Surumu)</h2>
      <div className="mb-4">
        <label htmlFor="">
          Post ID:&nbsp:
          <select
            className="w-[140px] bg-green-800"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            name=""
            id=""
          >
            <option value="1" className="font-extrabold text-blue-600">
              Nachricht - 1
            </option>
            <option value="2">Nachricht - 2</option>
          </select>
        </label>
      </div>
      <CommentList />
      <BlogPost id={postId} />

      <hr className="my-4 border-t-2 border-yellow-600" />
      <Controls />
    </div>
  )
}
