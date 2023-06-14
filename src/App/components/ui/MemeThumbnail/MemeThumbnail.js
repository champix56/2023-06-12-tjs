import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'
import {
  Link
} from 'react-router-dom'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'

const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {
        props.memes.map((m, i) => <div key={'thumbnail-meme-' + i}>
          <Link to={'/meme/' + m.id}>
            <MemeSVGViewer 
            meme={m} 
            image={props.images.find(im => im.id === m.imageId)} 
            basePath='' 
            />
            <br />
            {m.titre}
          </Link>
        </div>)
      }
    </div>
  )
}
MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
}
export default MemeThumbnail
export const MemeThumbnailStoreConnected = (props) => {
  const ressources = useSelector(s => s.ressources)
  return (
    <MemeThumbnail
      {...props}
      {...ressources}
    />)
}