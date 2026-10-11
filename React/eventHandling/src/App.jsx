import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom' 
import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <h1>nav</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
