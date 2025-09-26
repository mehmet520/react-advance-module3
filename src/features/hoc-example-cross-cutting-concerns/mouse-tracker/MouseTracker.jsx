import PanelMouseLogger from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/PanelMouseLogger'
import PointMouseLogger from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/PointMouseLogger'
import withMouseTracker from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/withMouseTracker'

const PanelMouseTracker = withMouseTracker(PanelMouseLogger)

const PointMouseTracker = withMouseTracker(PointMouseLogger)

const MouseTracker = (props) => {
  return (
    <div>
      <PanelMouseTracker {...props} />
      <PointMouseTracker />
    </div>
  )
}

export default MouseTracker
