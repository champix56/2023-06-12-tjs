import React from 'react'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'
export default function MemeSvgViewer(props) {
    const storeProps = useSelector(s => ({
        meme: s.current,
        image: s.ressources.images.find(i => i.id === s.current.imageId)
    }))
    return (
        <MemeSVGViewer {...props}{...storeProps} />
    )
}
