import Cat from 'features/render-prop-menu/cat-pointer/Cat'
import withMouse from 'features/render-prop-menu/cat-pointer/withMouse'

console.log('CatWithMouse calisti.')
const CatWithMouse = withMouse(Cat)
export default CatWithMouse
