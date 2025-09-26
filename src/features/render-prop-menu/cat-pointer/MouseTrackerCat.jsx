import Cat from 'features/render-prop-menu/cat-pointer/Cat'
import Mouse from 'features/render-prop-menu/cat-pointer/Mouse'

export default function MouseTrackerCat() {
  return (
    <div className="relative">
      <Mouse render={(mouse) => <Cat mousePos={mouse} />} />
    </div>
  )
}
