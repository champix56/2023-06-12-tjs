import React, { useState, useEffect } from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import Footer from './components/ui/Footer/Footer'
import { MemeFormStoredConnected } from './components/functional/MemeForm/MemeForm'
import {
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom'

import MemeSvgViewer from './components/ui/MemeSvgViewer/MemeSvgViewer'
import Editor from './pages/editor'

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
          <Route path='/thumbnail' element={<div>thumbnail</div>} />
          <Route path='/meme' element={<Editor/>} />
          <Route path='/meme/:id' element={<Editor/>} />
        </Routes>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App