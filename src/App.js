
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './Component/Layout'



import './App.css';
import Home from './Component/Home';
import Fooddetail from './Component/Fooddetail';

function App() {
return (
    <div className="App">
      <Routes>
      <Route path='/recipes' element={<Layout />}>
     <Route index element={<Home />} />
     <Route path='/recipes/:id' element={<Fooddetail />} />
     
     </Route>
     </Routes>
    
      
    
  </div>
  )}
export default App;
