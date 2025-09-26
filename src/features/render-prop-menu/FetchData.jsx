import { useEffect, useState } from 'react'

export default function FetchData({ render, url }) {
  const [data, setData] = useState([])

  useEffect(() => {
    if (url.includes('desserts')) {
      setData(['revani', 'sambaba', 'sutlac', 'uyutma'])
    } else {
      setData(['sut', 'ayran', 'serbet'])
    }
  }, [url])

  return render(data)
}
