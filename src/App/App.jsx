import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import Footer from './components/ui/Footer/Footer'
import {
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom'
import Editor from './pages/editor'
import  { MemeThumbnailStoreConnected } from './components/ui/MemeThumbnail/MemeThumbnail'

const App = () => {
  //chargement de datas post 1er montage (fetch si besoin) 
  useEffect(() => {
    // store.dispatch(fetchAllRessources())
  }, [])
  console.log(useParams(),useLocation());
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<div><h1>Hello a tous</h1></div>} />
          <Route path='/thumbnail' element={<MemeThumbnailStoreConnected/>} />
          <Route path='/meme' element={<Editor/>} />
          <Route path='/meme/:id' element={<Editor/>} />
        </Routes>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App