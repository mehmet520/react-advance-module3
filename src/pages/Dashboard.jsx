import CommentList from 'features/hoc-example-cross-cutting-concerns/CommentList'
import CurriedEnhancedButton from 'features/hoc-example-cross-cutting-concerns/currying/CurriedEnhancedButton'
import withSubscription from 'features/hoc-example-cross-cutting-concerns/hoc/withSubscription'
import MouseTracker from 'features/hoc-example-cross-cutting-concerns/mouse-tracker/MouseTracker'
import selectComments from 'features/hoc-example-cross-cutting-concerns/selectors/selectComments'
import RenderPropMenu from 'features/render-prop-menu/RenderPropMenu'
import MouseTrackerCat from 'features/render-prop-menu/cat-pointer/MouseTrackerCat'

// const CommentListWithSubscription = withSubscription(
//   CommentList,
//   selectComments
// )
// const PictureWithFetch = withFetch(
//   Picture,
//   // '/my-landscape.json'
//   'https://dog.ceo/api/breeds/image/random'
//   // 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg'
//   // 'https://dog.ceo/api/breed/hound-afghan/images/random'
//   // 'https://api.unsplash.com/photos/random?query=landscape&client_id=DEMO_KEY'
// )
// const QuoteWithFetch = withFetch(
//   Quote,
//   // '/my-quote.json',
//   'https://quotes-api-seven.vercel.app/api/quotes/random'
// )
console.log('Dashboard Bilesen calisti.')

export default function Dashboard() {
  console.log('Dashboard calisti.')

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <MouseTrackerCat />
      </div>
      <div>{/* <RenderPropMenu /> */}</div>

      <div className="card">
        <h2>Yorumlar</h2>
        {/* <CommentListWithSubscription /> */}
      </div>

      {/* Mouse tracker kartı */}
      <div className="card">{/* <MouseTracker yazar="Mehmet Yilmaz" /> */}</div>

      {/* Curried button kartı */}
      <div className="card">{/* <CurriedEnhancedButton /> */}</div>

      <div className="card">{/* <ButtonCurrying /> */}</div>

      <div className="card">
        {/* <PictureWithFetch /> */}
        {/* <QuoteWithFetch /> */}
      </div>
    </div>
  )
}
