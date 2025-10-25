import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ReactSystem from './Task.jsx'

test('başlangıçta 2 görev var, ekleyince artar', async () => {
  render(<ReactSystem />)
  expect(screen.getByText(/Toplam 2 görev var/i)).toBeInTheDocument()

  await userEvent.click(screen.getByRole('button', { name: /Görev Ekle/i }))

  expect(screen.getByText(/Toplam 3 görev var/i)).toBeInTheDocument()
})
