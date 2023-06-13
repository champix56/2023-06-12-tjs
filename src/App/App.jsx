import React from 'react'
import FlexV3Grow from './components/layout/FlexV3Grow/FlexV3Grow'
import Header from './components/ui/Header/Header'
import NavBar from './components/ui/NavBar/NavBar'
import FlexH1Grow from './components/layout/FlexH1Grow/FlexH1Grow'
import Footer from './components/ui/Footer/Footer'
import {MemeSVGViewer, emptyMeme} from 'orsys-tjs-meme'
import MemeForm from './components/functional/MemeForm/MemeForm'
const App = () => {
  return (
    <div className="App">
      <FlexV3Grow>
        <Header />
        <NavBar />
        <FlexH1Grow>
          <MemeSVGViewer meme={emptyMeme} image={undefined} basePath=''/>
          <MemeForm/>
        </FlexH1Grow>
        <Footer />
      </FlexV3Grow>
    </div>
  )
}

export default App