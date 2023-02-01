import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Box, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import type { GetCoursesProps } from '../pages/Department'

type DepartmentCardProps = {
  departmentLabel: string
  departmentName: string
  courses: GetCoursesProps[]
}

const bullet = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '10px', transform: 'scale(2.0)' }}
  >
    •
  </Box>
)

export const DepartmentCard = ({
  departmentLabel,
  departmentName,
  courses
}: DepartmentCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" className="!font-bold">
          {departmentLabel}
          {bullet}
          {departmentName}
        </Typography>
        <Typography variant="h6" component="div" className="underline">
          Cursos
        </Typography>
        {courses.map((course) => {
          return (
            <List>
              <ListItem>
                <ListItemText
                  primary={course.courseName}
                  secondary={`Duração: ${course.duration} anos`}
                />
              </ListItem>
            </List>
          )
        })}
      </CardContent>
    </Card>
  )
}
