import EnhancedButton from 'features/hoc-example-cross-cutting-concerns/buton-currying/EnhancedButton'

export default function ButtonCurrying() {
  return (
    <div className=" ">
      <h1>HOC Currying Example</h1>
      {/* Kullanici admin rolunde (gosterilir) */}
      <EnhancedButton
        label="Admin Butonu"
        userRole="admin"
        onClick={() => alert('Tiklandi')}
      />

      {/* Kullanıcı guest rolünde (gizlenir) */}
      <EnhancedButton
        label="Guest Butonu"
        userRole="guest"
        onClick={() => alert('Tıklandı!')}
      />
    </div>
  )
}
