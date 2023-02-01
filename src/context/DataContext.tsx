import { createContext, PropsWithChildren, useContext } from 'react'
import data from './data.json'

type DisciplinesPerPeriod = {
  period: number
  disciplineIds: string[]
}

type DisciplineProps = {
  disciplineId: string
  disciplineName: string
  credits: number
  creditsInHours: number
  goals: string
  description: string
  bibliography: string
}

type ProfessorsProps = {
  professorId: string
  professorName: string
  professorBirthdate: string
  professorSalary: number
  professorEmail: string
  professorPhone: string
  relatedDisciplines: string
}

type GradeProps = {
  disciplineId: string
  value: string
}

type StudentsProps = {
  studentId: string
  studentName: string
  studentBirthdate: string
  grades: GradeProps[]
  currentDisciplines: string[]
}

export type CourseProps = {
  courseId: string
  courseName: string
  duration: number
  description: string[]
  disciplines: DisciplinesPerPeriod[]
}

export type DepartmentsProps = {
  departmentId: string
  departmentLabel: string
  departmentName: string
  courses: CourseProps[]
}

type ContextProps = {
  departments: DepartmentsProps[]
  disciplines: DisciplineProps[]
  professors: ProfessorsProps[]
  students: StudentsProps[]
}

const DataContext = createContext({} as ContextProps)

export const DataProvider = ({ children }: PropsWithChildren) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)
