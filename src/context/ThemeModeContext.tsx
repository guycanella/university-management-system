import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react'

type ThemeProps = {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  textColor: string
}

const lightTheme: ThemeProps = {
  primaryColor: 'bg-[#FFFFFF]',
  secondaryColor: 'bg-[#F7F7F7]',
  tertiaryColor: 'bg-white',
  textColor: 'text-[#707070]'
}

const darkTheme: ThemeProps = {
  primaryColor: 'bg-[#3A3B3C]',
  secondaryColor: 'bg-[#242526]',
  tertiaryColor: 'bg-gray-300',
  textColor: 'text-[#CCCCCC]'
}

type ThemeState = 'light' | 'dark'

type ContextProps = {
  theme: ThemeProps
  modeTheme: ThemeState
  setModeTheme: (item: ThemeState) => void
}

const ThemeContext = createContext({} as ContextProps)

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [modeTheme, setModeTheme] = useState<ThemeState>('light')

  const theme = useMemo(() => {
    if (modeTheme === 'light') {
      return lightTheme
    }

    return darkTheme
  }, [modeTheme])

  return (
    <ThemeContext.Provider value={{ theme, modeTheme, setModeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
