import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import Home from './Home';
import Visto from './Visto'
import { Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <main style={{ flex: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Visto" element={<Visto />} />
                    <Route path="/Form" element={<Form />} />
                </Routes>
            </main>
            <Footer />
        </div>
  );
}

export default App;
