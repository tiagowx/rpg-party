import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Room from './Room';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index path='/room' element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;