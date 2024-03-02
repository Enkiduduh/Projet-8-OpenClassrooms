import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Logement from './components/pages/Logement'
import NotFound from './components/pages/NotFound'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faChevronUp, faChevronDown);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
