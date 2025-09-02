import { Box } from '@chakra-ui/react'
import Card from 'components/card/Card'
import AnketRadio from 'features/anket-radio'
import Anket from 'features/anket/Anket'
import Bestell from 'features/bestell'
import Bestellung from 'features/bestellung'
import DeleteAccount from 'features/delete-account/DeleteAccount'
import DeleteKonto from 'features/konto-delete'
import LiveBestellung from 'features/live-bestellung'
import LiveOrders from 'features/live-orders'
import { MyComponent } from 'features/MyComponent'
import Order from 'features/order'
import Radio from 'features/radio/Radio'
import './components.css'

export default function About() {
  const name = 'Mehmet Yilmaz'
  return (
    <>
      <div className="">About Sayfasi</div>

      <Box bg="brand.700" color="white" p="4" rounded="md">
        Ben Chakra v3 Box&apos;ım
      </Box>
      <Anket />
      <AnketRadio />
      <Radio />
      <LiveOrders />
      <Bestell />
      <Bestellung />
      <LiveBestellung />
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
      <DeleteKonto />
      <Order />
    </>
  )
}
