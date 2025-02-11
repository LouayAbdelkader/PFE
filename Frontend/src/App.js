import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './pages/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
          <Navbar></Navbar>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/" element={<Login />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default App;