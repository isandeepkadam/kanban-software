import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
