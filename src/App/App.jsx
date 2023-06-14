import React, {useState, useEffect} from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import Footer from './components/ui/Footer/Footer'
import {MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme'
import MemeForm, { MemeFormStoredConnected } from './components/functional/MemeForm/MemeForm'
import datas from './db.json'
import store from './store/store'
import MemeSvgViewer from './components/ui/MemeSvgViewer/MemeSvgViewer'
 
const App = () => {
 
//chargement de datas post 1er montage (fetch si besoin) 
useEffect(() => {
 // store.dispatch(fetchAllRessources())
}, [])
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSvgViewer basePath=''/>
          <MemeFormStoredConnected />
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App