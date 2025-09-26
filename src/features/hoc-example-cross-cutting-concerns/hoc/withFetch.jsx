import { useEffect, useState } from 'react'

export const withFetch = (Component, fetchUri) => {
  console.log('withFetch')

  function WrappedComponent(props) {
    console.log('WrappedComponent')
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    function fetchData() {
      console.log('fetchData')
      fetch(fetchUri)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
    }

    useEffect(() => {
      console.log(
        'useEffect: Ben sadece render sonrası çalışırım, render başlatmam.',
        Component.name
      )
      if (!data) fetchData()
    })

    console.log('data :>> ', data, Component.name)
    return <Component data={data} error={error} {...props} />
  }

  WrappedComponent.displayName = `withFetch(${Component.displayName || Component.name || 'Component'})`
  console.log(WrappedComponent.displayName)
  return WrappedComponent
}
