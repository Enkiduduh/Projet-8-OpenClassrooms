import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Cards from './components/pages/Cards'
import NotFound from './components/pages/NotFound'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar, faChevronUp, faChevronDown);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
