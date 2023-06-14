import React from 'react'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'
export default function MemeSvgViewer(props) {
    const meme = useSelector(s => s.current)
    const images=useSelector(s=>s.ressources.images)
    return (
        <MemeSVGViewer {...props} meme={meme} image={images.find(i=>i.id===meme.imageId)} />
    )
}
