// react imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// internal imports
import { Home } from './pages'

// styles
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>      
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
