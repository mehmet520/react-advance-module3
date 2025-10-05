import Cat from 'features/render-prop-menu/cat-pointer/Cat'
import Mouse from 'features/render-prop-menu/cat-pointer/Mouse'

export default function MouseTrackerCat() {
  console.log('MouseTrackerCat calisti.')

  return (
    <div className="">
      <Mouse render={(mouse) => <Cat mousePos={mouse} />} />
    </div>
  )
}
