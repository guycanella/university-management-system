import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

import universityImage from '../assets/university-high-1600.jpg'

export const Home = () => {
  return (
    <>
      <Container className="relative w-full h-[60vh]">
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
      <Container className="bg-white h-[500px] !px-0 !mx-0 !max-w-full"></Container>
    </>
  )
}
