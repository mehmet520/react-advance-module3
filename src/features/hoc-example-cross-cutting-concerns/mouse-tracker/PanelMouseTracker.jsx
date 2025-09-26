import PanelMouseLogger from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/PanelMouseLogger'
import withMouseTracker from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/withMouseTracker'

const PanelMouseTracker = withMouseTracker(PanelMouseLogger)
