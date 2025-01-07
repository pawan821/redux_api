import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'
import Create from '../create'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default AppRouter