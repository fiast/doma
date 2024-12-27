import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HouseCard from './components/HouseCard';

const App = () => {
    return (
        <Router>
            <div className="container text-center py-5">
                <h1 className="mb-4">Информация о домах</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/house/:id" element={<HouseCard />} />
                </Routes>
                <h2 className="mt-4">
                    <a href="/" className="text-primary text-decoration-none">
                        Menu
                    </a>
                </h2>
            </div>
        </Router>
    );
};

export default App;

