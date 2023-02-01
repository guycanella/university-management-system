import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { DataProvider } from './context/DataContext'
import { useTheme } from './context/ThemeModeContext'

import './global.css'

function App() {
  const { theme } = useTheme()

  return (
    <DataProvider>
      <main className={`flex ${theme.secondaryColor}`}>
        <Navbar />
        <section className="outlet w-full">
          <Outlet />
        </section>
      </main>
    </DataProvider>
  )
}

export default App
