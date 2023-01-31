
import './App.css';
import Modal from './components/modal/Modal';
import Category from './components/showcategory/Category';
import { BrowserRouter as Routes, Router,Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  return (
    <>
    {/* <Routes>
      <Router>
        <Route path='/'element={<Category/>}   />
        <Route path='/addcategory'element={<Modal/>}   />
      </Router>
    </Routes> */}
    <Modal/>
    <Category/>
    </>
  );
}

export default App;
