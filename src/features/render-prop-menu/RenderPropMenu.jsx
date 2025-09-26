import DessertsCount from 'features/render-prop-menu/DessertsCount'
import DrinksCount from 'features/render-prop-menu/DrinksCount'

export default function RenderPropMenu() {
  return (
    <div className="card">
      RenderProp Menu
      <DessertsCount />
      <DrinksCount />
    </div>
  )
}
