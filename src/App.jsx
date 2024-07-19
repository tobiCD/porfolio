import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './component/Sidenav'
import Main from './component/Main'
import Work from './component/Work'
import Project from './component/Project'
import Contact from './component/Contact'
import Techstack from './component/Techstacks'
function App() {

  return (
    <StrictMode>
      
    <Sidenav />
    <Main/>
    <Work/>
    <Techstack/>
    <Project/>
    <Contact/>
    
    </StrictMode>
  )
}

export default App
