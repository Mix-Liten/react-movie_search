import { useEffect, useState } from 'react'

export default function useFetch(url: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)

    fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { isLoading, isError, data }
}
