import { useState } from 'react'
import { Link } from 'react-router-dom'

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import GroupsIcon from '@mui/icons-material/Groups'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

import { ToggleSidebar } from './ToggleSidebar'

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

  return (
    <nav
      className={`relative h-screen p-4 shadow-xl transition-[width] ease-in-out delay-100 bg-white ${
        isSidebarOpen ? 'w-[220px]' : 'w-[75px]'
      }`}
    >
      <ToggleSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box className="navbar-content overflow-hidden">
        <header className="menu-header flex mb-10 pl-2 gap-3 items-center">
          <LocalLibraryIcon className="text-[#1976d2]" />
          <Box className="menu-title">
            <Typography variant="h6" className="!mb-0" gutterBottom>
              Space
            </Typography>
            <Typography
              variant="body2"
              className="!text-xs !text-[#707070] !min-w-max"
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
                className="uppercase flex items-center border border-white hover:border-[#1976d2] rounded p-2 gap-3 text-[#707070]"
                key={link.title}
                to={link.link}
              >
                {link.icon}
                {link.title}
              </Link>
            )
          })}
        </Box>
      </Box>
    </nav>
  )
}
