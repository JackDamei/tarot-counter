import { useEffect, useState } from 'react'

export type HTTPVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export function useFetch(
  url: string,
  method: HTTPVerb = 'GET',
  headers: { [key: string]: string } = {}
) {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    const initHeaders = new Headers()
    Object.keys(headers).map((key) => initHeaders.append(key, headers[key]))
    const init: RequestInit = { method: method, headers: initHeaders }
    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url, init)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }

    fetchData()
  }, [url, method, headers])

  return { isLoading, data, error }
}
