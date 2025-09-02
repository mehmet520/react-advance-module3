import DefaultLayout from 'layouts/DefaultLayout'
import About from 'pages/About'
import Examples from 'pages/Examples'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
