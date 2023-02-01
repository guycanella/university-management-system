import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import { useTheme } from '../context/ThemeModeContext'

import universityImage from '../assets/university-high-1600.jpg'

export const Home = () => {
  const { theme } = useTheme()

  const topContainer = 40

  return (
    <Container className="relative !px-0 !mx-0 w-full !max-w-full h-screen overflow-y-auto">
      <Container className={`relative w-full h-[${topContainer}vh]`}>
        <Box className="absolute rounded-md w-[100%] max-w-[800px] -bottom-8 left-1/2 -translate-x-1/2 shadow-2xl">
          <Box className="absolute flex flex-col border rounded-md shadow-lg bg-white p-4 items-center -top-16 left-1/2 -translate-x-1/2">
            <LocalLibraryIcon className="text-[#1976d2]" />
            <Typography variant="h6" className="!mb-0" gutterBottom>
              Space
            </Typography>
            <Typography variant="body2" className="!text-xs !text-[#707070]">
              Management System
            </Typography>
          </Box>
          <img
            src={universityImage}
            alt="Imagem principal da Universidade do Youtube"
            className="max-w-[100%] rounded-md"
          />
        </Box>
      </Container>
      <Container
        className={`${theme.tertiaryColor} h-[${
          100 - topContainer
        }vh] !p-10 !mx-0 !max-w-full`}
      >
        <Typography variant="h2" className="!font-bold underline !mb-10">
          Homepage
        </Typography>
        <Typography variant="body1" className="!text-xl">
          Space: Sistema de Gerenciamento para universidades. Use o Menu lateral
          para navegar entre as seções
        </Typography>
      </Container>
    </Container>
  )
}
