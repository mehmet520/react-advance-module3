import { ToggleContext } from 'components/toggleCompoundComponents/ToggleContext'
import { useContext } from 'react'

const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(
      'Toggle birlesik bilesenleri(compound components) sadece <Toggle /> bileseni icinde kullanilabilir'
    )
  }
  return context
}

export default useToggleContext
