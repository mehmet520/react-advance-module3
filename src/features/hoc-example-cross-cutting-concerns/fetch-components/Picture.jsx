import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function Picture({ data, error }) {
  const renderCount = useRef(0)
  renderCount.current += 1
  console.log('Picture')
  console.log('Render count:', renderCount.current)

  // if(!data) return <div>Yukleniyor...</div>
  return (
    <div className="flex justify-center">
      <div>
        <div>Render count: {renderCount.current}</div>
        {data ? (
          <img src={data?.message} className="w-[200px]" alt="Random dog" />
        ) : !error ? (
          <div>No picture is available yet...</div>
        ) : (
          error && <div>{error?.message}</div>
        )}
      </div>
    </div>
  )
}

Picture.propTypes = {
  data: PropTypes.shape({
    message: PropTypes.string,
  }), // not required because data can be null while fetching
  error: PropTypes.any,
}

Picture.defaultProps = {
  data: null,
  error: null,
}
