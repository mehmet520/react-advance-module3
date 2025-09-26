import { useEffect, useState } from 'react'
import DataSource from '../data/DataSource'

export default function withSubscription(WrappedComponent, selectData) {
  return function SubscriptionComponent(props) {
    const [data, setData] = useState([])

    useEffect(() => {
      function handleChange() {
        const newData = selectData(props)
        setData(newData)
      }
      handleChange() // ilk veri yukleme
      DataSource.addListener(handleChange)

      return () => {
        DataSource.removeListener(handleChange)
      }
    }, [])

    return <WrappedComponent data={data} {...props} />
  }
}
