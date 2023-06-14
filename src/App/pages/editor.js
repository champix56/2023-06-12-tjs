import React, {useEffect} from 'react'
import {
    useParams, useLocation, useNavigate
} from 'react-router-dom'
import MemeSvgViewer from '../components/ui/MemeSvgViewer/MemeSvgViewer'
import { MemeFormStoredConnected } from '../components/functional/MemeForm/MemeForm'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import { update } from '../store/currentSlice'
import {useDispatch, useSelector} from 'react-redux'
 import {emptyMeme} from 'orsys-tjs-meme'
export default function Editor() {
    const d=useDispatch()
    const memes=useSelector(s=>s.ressources.memes)
    const params=useParams()
    useEffect(() => {
        console.log(params,memes)
        if(undefined!==params.id){
            const toViewMeme=memes.find(m=>m.id===Number(params.id))
            if(undefined===toViewMeme){}
            else {d(update(toViewMeme))}
        }
        else{
            //pas de id defined
            d(update(emptyMeme));
        }
    }, [params,memes,d])
    return (
        <FlexH1Grow>
            <MemeSvgViewer basePath='' />
            <MemeFormStoredConnected />
        </FlexH1Grow>
    )
}
