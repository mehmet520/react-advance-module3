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
