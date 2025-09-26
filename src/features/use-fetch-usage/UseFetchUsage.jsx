import useFetch from 'hooks/useFetch'

export default function UseFetchUsage() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1'
  )
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error {error}</div>
  return (
    <div>
      <h2>Kullanici Bilgisi</h2>
      <p>Isim: {data.name}</p>
      <p>Email: {data.email}</p>
      {/* <pre>{JSON.stringify(data, null, '\t')}</pre> */}
    </div>
  )
}
