import { useState } from 'react'
import { Link } from 'react-router-dom'

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import GroupsIcon from '@mui/icons-material/Groups'
import { Box } from '@mui/material'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness5Icon from '@mui/icons-material/Brightness5'

import { ToggleSidebar } from './ToggleSidebar'
import { useTheme } from '../context/ThemeModeContext'

const menuLinks = [
  {
    link: '/',
    title: 'Início',
    icon: <HomeIcon />
  },
  {
    link: '/department',
    title: 'Departamentos',
    icon: <AccountBalanceIcon />
  },
  {
    link: '/courses',
    title: 'Cursos',
    icon: <DashboardIcon />
  },
  {
    link: '/professors',
    title: 'Professores',
    icon: <PersonIcon />
  },
  {
    link: '/students',
    title: 'Alunos',
    icon: <GroupsIcon />
  }
]

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [mode, setMode] = useState(true)

  const { theme, modeTheme, setModeTheme } = useTheme()

  const label = { inputProps: { 'aria-label': 'Switch dark-light mode' } }

  const handleChangeMode = () => {
    setMode(!mode)

    if (modeTheme === 'light') {
      setModeTheme('dark')

      return
    }

    setModeTheme('light')
  }

  return (
    <nav
      className={`relative h-screen p-4 shadow-xl transition-[width] ease-in-out delay-100 z-10 ${
        theme.primaryColor
      } ${isSidebarOpen ? 'w-[250px]' : 'w-[75px]'}`}
    >
      <ToggleSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box className="navbar-content relative overflow-hidden flex flex-col h-full">
        <header className="menu-header flex mb-10 pl-2 gap-3 items-center">
          <LocalLibraryIcon className="text-[#1976d2]" />
          <Box className="menu-title">
            <Typography
              variant="h6"
              className={`!mb-0 ${
                modeTheme === 'light' ? 'text-black' : 'text-white'
              }`}
              gutterBottom
            >
              Space
            </Typography>
            <Typography
              variant="body2"
              className={`!text-xs ${theme.textColor} !min-w-max`}
              gutterBottom
            >
              Universidade do Youtube
            </Typography>
          </Box>
        </header>
        <Box className="menu-body flex flex-col gap-4">
          {menuLinks.map((link) => {
            return (
              <Link
                className={`uppercase flex items-center border ${
                  modeTheme === 'light' ? 'border-white' : 'border-transparent'
                } ${
                  modeTheme === 'light'
                    ? 'hover:border-[#1976d2]'
                    : 'hover:border-white'
                } rounded p-2 gap-3 ${theme.textColor}`}
                key={link.title}
                to={link.link}
              >
                {link.icon}
                {link.title}
              </Link>
            )
          })}
        </Box>
        <Box
          className={`flex pl-2 gap-3 ${
            theme.textColor
          } items-center !min-w-max mt-auto ${
            modeTheme === 'light' ? 'bg-[#EDEDED]' : ''
          } rounded-md`}
        >
          {mode ? <Brightness5Icon /> : <DarkModeIcon />}
          Modo {mode ? 'Light' : 'Dark'}
          <Switch {...label} checked={!mode} onChange={handleChangeMode} />
        </Box>
      </Box>
    </nav>
  )
}
