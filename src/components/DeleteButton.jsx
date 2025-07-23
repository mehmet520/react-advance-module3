import Button from 'components/Button'

export default function DeleteButton() {
  return <Button color="red">Delete</Button>
}

export function List() {
  const deserts = ['tiramisu', 'ice cream', 'cake']
  return (
    <ul>
      {deserts.map((desert) => (
        <li key={desert}>{desert}</li>
      ))}
    </ul>
  )
}
