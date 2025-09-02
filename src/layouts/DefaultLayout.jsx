import Nav from 'components/nav'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-indigo-700 p-4 text-white">
        <h2>LOGO</h2>
        <Nav />
      </header>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-800 p-4 text-center text-gray-200">
        © 2025 My App
      </footer>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}
