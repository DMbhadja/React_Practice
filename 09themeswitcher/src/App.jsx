
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
 const [thememode, setThememode] = useState("Light")

 const lightTheme = () => {
  setThememode("light")
 }
 const darkTheme  = () => {
  setThememode("dark")
 }

 useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(thememode)
 },[thememode])

  return (
    <ThemeProvider value={{thememode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
        </div>
    </ThemeProvider>
  )
}

export default App
