import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import './global.css'

function App() {
  return (
    <main className="flex bg-[#F7F7F7]">
      <Navbar />
      <section className="outlet w-full">
        <Outlet />
      </section>
    </main>
  )
}

export default App
