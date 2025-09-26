import FetchData from 'features/render-prop-menu/FetchData'

export default function DessertsCount() {
  return (
    <FetchData
      url="https://littlelemon/desserts"
      render={(data) => <p>Deserts Count: {data.length}</p>}
    />
  )
}
