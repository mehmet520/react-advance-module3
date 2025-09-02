import { NavLink } from 'react-router-dom'

export default function Nav() {
  const base = 'text-white font-semibold py-1 hover:text-yellow-300'
  const active = 'underline underline-offset-4'

  return (
    <nav className="mb-2 flex gap-8">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        Ana Sayfa
      </NavLink>

      <NavLink
        to="examples"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        Examples
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
      >
        Hakkinda
      </NavLink>
    </nav>
  )
}
