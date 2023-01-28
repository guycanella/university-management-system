import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import './global.css'


function App () {
  return (
    <>
      <h1>Isso não muda</h1>
      <Navbar />
      <Outlet />
      <h2>Isso também muda</h2>
    </>
  )
}

export default App
