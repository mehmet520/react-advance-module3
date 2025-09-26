import PropTypes from 'prop-types'

export default function Quote({ data, error }) {
  console.log('Quote')

  // if (!data) return <div>No quote is available yet</div>
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {data ? (
          <div>{`"${data?.quote}" by ${data?.author}`}</div>
        ) : !error ? (
          <div>No quote is available yet!</div>
        ) : (
          <div>{`Error: ${error?.message}`}</div>
        )}
      </div>
      <div>
        <pre>
          {data ? JSON.stringify(data, null, 2) : ''}
          {error ? JSON.stringify(error, null, 2) : ''}
        </pre>
      </div>
    </div>
  )
}
Quote.propTypes = {
  data: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  }),
  error: PropTypes.object,
}
