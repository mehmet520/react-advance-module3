import { useEffect, useState } from 'react'

export default function useSubcription(dataSource, selectData) {
  const [data, setData] = useState(selectData(dataSource))

  useEffect(() => {
    const handleChange = () => {
      setData(selectData(dataSource))
    }

    dataSource.addChangeListener(handleChange)
  }, [dataSource])

  return data
}
