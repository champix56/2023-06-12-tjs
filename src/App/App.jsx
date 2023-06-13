import React, {useState, useEffect} from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import Footer from './components/ui/Footer/Footer'
import {MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme'
import MemeForm from './components/functional/MemeForm/MemeForm'
import datas from './db.json'
const appInitialState={
  images:[],
  memes:[],
  current:emptyMeme
}
const App = () => {
const [state, setstate] = useState(appInitialState)
//chargement de datas post 1er montage (fetch si besoin) 
useEffect(() => {
  setstate({...state,...datas});
}, [])
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewer 
            meme={state.current} 
            image={state.images.find(img=>{
              return img.id===state.current.imageId
            })} 
            basePath=''/>
          <MemeForm 
            onMemeChange={(meme)=>{
              setstate({...state,current:meme})
            }} 
            images={datas.images} 
            current={state.current}/>
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App