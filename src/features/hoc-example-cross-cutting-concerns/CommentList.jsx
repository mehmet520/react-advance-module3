import PropTypes from 'prop-types'

export default function CommentList({ data = [] }) {
  return (
    <div>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <button>Add Comment</button>
    </div>
  )
}

CommentList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

CommentList.defaultProps = {
  data: [],
}
