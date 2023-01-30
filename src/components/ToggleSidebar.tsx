import { Button } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

type ToggleSidebarProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (item: boolean) => void
}

export const ToggleSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen
}: ToggleSidebarProps) => {
  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Button
      variant="contained"
      className="!absolute !rounded-[50%] !p-0 !min-w-0 top-7 -right-3 bg-[#1976d2] text-white z-10"
      onClick={handleOpenSidebar}
    >
      {isSidebarOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </Button>
  )
}
