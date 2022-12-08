import './css/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './about/About';
import Support from './support/Support';
import Header from './Header';
import AddSighting from './add-sighting/AddSighting';

export default function App() {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="support" element={<Support />} />
                            <Route path="add-sighting" element={<AddSighting />} />
                        </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}