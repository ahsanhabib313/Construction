import  React  from 'react'
import './output.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

function App() {
 
  return (
    <>
    
       {  <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter> }
    </>
  )
}

export default App
