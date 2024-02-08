import Home from './components/pages/Home'
import About from './components/pages/About'
import Cards from './components/pages/Card'

import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cards" element={<Cards />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
