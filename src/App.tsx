import { Outlet } from 'react-router-dom'

import './global.css'


function App () {
  return (
    <>
      <h1>Isso não muda</h1>
      <Outlet />
      <h2>Isso também muda</h2>
    </>
  )
}

export default App
