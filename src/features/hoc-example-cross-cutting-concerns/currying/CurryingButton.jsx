import Button from 'features/hoc-example-cross-cutting-concerns/currying/Button'
import withAuth from 'features/hoc-example-cross-cutting-concerns/currying/withAuth'
import withLogger from 'features/hoc-example-cross-cutting-concerns/currying/withLogger'
import withTheme from 'features/hoc-example-cross-cutting-concerns/currying/withTheme'

const compose =
  (...func) =>
  (Component) =>
    func.reduceRight((acc, fn) => fn(acc), Component)

console.log('CurryingButton calisti.')

const CurryingButton = compose(
  withAuth('admin'),
  withLogger('withLogger fonksiyonu calisti.'),
  withTheme({
    background: 'darkred',
    color: 'yellow',
    padding: '10px',
    borderRadius: '8px',
  })
)(Button)

export default CurryingButton
