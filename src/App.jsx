
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'
import From from './from'
import Card from './card'
import Contaner from './contaner'


function App() {


  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/contaner" element={< Contaner />} />
      <Route path="" element={<Home /> } />
      <Route path="/from" element={< From />} />
      <Route path="/contact" element={<h1> this is contact page</h1>} />
     < route path='/tailwind' element={[]}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
