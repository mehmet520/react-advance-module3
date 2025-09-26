import Button from 'features/hoc-example-cross-cutting-concerns/buton-currying/Button'
import withAuth from 'features/hoc-example-cross-cutting-concerns/buton-currying/withAuth'
import withLogger from 'features/hoc-example-cross-cutting-concerns/buton-currying/withLogger'
import withTheme from 'features/hoc-example-cross-cutting-concerns/buton-currying/withTheme'

const compose =
  (...funcs) =>
  (Component) => {
    return funcs.reduceRight((acc, fn) => {
      return fn(acc)
    }, Component)
  }

const EnhancedButton = compose(
  withAuth('admin'),
  withLogger(`Button render edildi => ${Button.name} Component icinde.`),
  withTheme({ background: 'black', color: 'yellow' })
)(Button)

export default EnhancedButton
