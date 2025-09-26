import FetchData from 'features/render-prop-menu/FetchData'

export default function DrinksCount() {
  return (
    <FetchData
      url="https://littlelemon/drinks"
      render={(data) => <p>Drinks Count: {data.length}</p>}
    />
  )
}
