import React from 'react'
import HomePage from './jobRinger/pages/HomePage'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  );
}

export default App