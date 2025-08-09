import Button from 'components/button/Button'
import PropTypes from 'prop-types'

export default function DeleteButton(props) {
  return (
    <Button backgroundColor="darkred" {...props}>
      {props.children || 'Loeschen'}
    </Button>
  )
}

DeleteButton.propTypes = {
  children: PropTypes.string,
}
