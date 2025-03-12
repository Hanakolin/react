
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'
import From from './from'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home /> } />
      <Route path="/from" element={< From />} />
      <Route path="/contact" element={<h1> this is contact page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
