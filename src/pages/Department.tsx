import { useCallback, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'

import { useData } from '../context/DataContext'
import { DepartmentCard } from '../components/DepartmentCard'
import type { DepartmentsProps } from '../context/DataContext'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import { Modal } from '../components/ModalComponent'

export type GetCoursesProps = {
  courseName: string
  duration: number
}

const getCourses = (dept: DepartmentsProps) => {
  return dept.courses.reduce((acc, curr) => {
    acc.push({ courseName: curr.courseName, duration: curr.duration })

    return acc
  }, [] as GetCoursesProps[])
}

export const Department = () => {
  const { departments } = useData()

  const [open, setOpen] = useState(false)
  const [departmentData, setDepartmentData] =
    useState<DepartmentsProps[]>(departments)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <Container className="!p-10 !mx-0 w-full !max-w-full h-screen overflow-y-auto">
      <Typography variant="h2" className="!font-bold underline !mb-10">
        Departamentos
      </Typography>
      <Grid container>
        {departmentData.map((department) => {
          const courses = getCourses(department)

          return (
            <Grid key={department.departmentId}>
              <DepartmentCard
                departmentLabel={department.departmentLabel}
                departmentName={department.departmentName}
                courses={courses}
              />
            </Grid>
          )
        })}
      </Grid>
      <Button
        className="!mt-4"
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={handleOpenModal}
      >
        adicionar
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        <DialogTitle>Adicionar novo departamento</DialogTitle>
        <Divider />
        <Box className="flex gap-4 mt-4" component="div">
          <TextField
            id="outlined-basic"
            label="Sigla do Departamento"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Nome do Departamento"
            variant="outlined"
          />
        </Box>
      </Modal>
      {/* <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Adicionar novo departamento</DialogTitle>
        <Divider />
        <TextField
          id="outlined-basic"
          label="Sigla do Departamento"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Nome do Departamento"
          variant="outlined"
        />
        <Box component="div"></Box>
      </Dialog> */}
    </Container>
  )
}
