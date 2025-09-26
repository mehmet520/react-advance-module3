import CurryingButton from 'features/hoc-example-cross-cutting-concerns/currying/CurryingButton'

const CurriedEnhancedButton = () => {
  console.log('CurriedEnhancedButton calisti.')

  return (
    <div>
      <h3>HOC CurriedEnhancedButton</h3>
      <CurryingButton
        onClick={() => {
          alert("Buton'a tiklandi.")
        }}
        label="Admin Button"
        userRole="admin"
      />
      <CurryingButton
        onClick={() => {
          alert("Buton'a tiklandi.")
        }}
        label="Guest Button"
        userRole="guest"
      />
    </div>
  )
}

export default CurriedEnhancedButton
