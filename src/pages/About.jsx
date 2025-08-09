import Card from 'components/card/Card'
import DeleteAccount from 'features/delete-account/DeleteAccount'
import Order from 'features/order'
import DefaultLayout from 'layouts/DefaultLayout'
import './components.css'
import DeleteKonto from 'features/konto-delete'
import LiveBestellung from 'features/live-bestellung'
import { MyComponent } from 'features/MyComponent'

export default function About() {
  const name = 'Mehmet Yilmaz'
  return (
    <DefaultLayout>
      <div className="">About Sayfasi</div>
      <DeleteAccount />
      <MyComponent name={name}>
        {(name) => (
          <div>
            <strong>{`${name} yaz.`}</strong>
          </div>
        )}
      </MyComponent>
      <Card>
        <p className="bg-fuchsia-300 text-red-600">Das ist ein Absatz.</p>
        <p className="">Und noch ein Absatz.</p>
        <button>Ich bin ein Button</button>
      </Card>
      <LiveBestellung />
      <DeleteKonto />
      <Order />
    </DefaultLayout>
  )
}
