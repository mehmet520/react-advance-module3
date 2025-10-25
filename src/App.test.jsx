// Mock layout and pages before importing App
jest.mock('layouts/DefaultLayout', () => {
  const React = require('react')
  const { Outlet } = require('react-router-dom')
  return function MockDefaultLayout() {
    return React.createElement(
      'div',
      { 'data-testid': 'default-layout' },
      React.createElement(Outlet)
    )
  }
})
jest.mock('pages/Home', () => {
  const React = require('react')
  function HomeMock() {
    return React.createElement('div', null, 'HomeMock')
  }
  HomeMock.displayName = 'HomeMock'
  return HomeMock
})
jest.mock('pages/About', () => {
  const React = require('react')
  function AboutMock() {
    return React.createElement('div', null, 'AboutMock')
  }
  AboutMock.displayName = 'AboutMock'
  return AboutMock
})
jest.mock('pages/Examples', () => {
  const React = require('react')
  function ExamplesMock() {
    return React.createElement('div', null, 'ExamplesMock')
  }
  ExamplesMock.displayName = 'ExamplesMock'
  return ExamplesMock
})
jest.mock('pages/Dashboard', () => {
  const React = require('react')
  function DashboardMock() {
    return React.createElement('div', null, 'DashboardMock')
  }
  DashboardMock.displayName = 'DashboardMock'
  return DashboardMock
})
jest.mock('pages/NotFound', () => {
  const React = require('react')
  function NotFoundMock() {
    return React.createElement('div', null, 'NotFoundMock')
  }
  NotFoundMock.displayName = 'NotFoundMock'
  return NotFoundMock
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders Home at root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText('HomeMock')).toBeInTheDocument()
})

test('renders About at /about', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText('AboutMock')).toBeInTheDocument()
})

test('renders NotFound for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText('NotFoundMock')).toBeInTheDocument()
})
