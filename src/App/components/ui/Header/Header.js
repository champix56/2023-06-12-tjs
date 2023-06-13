import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.module.css'
const Header = (props) => {
  return (
    <div className={style.Header} data-testid="Header">
     Meme<span className={style.dot}>.</span><span className={style.js}>js</span>
    </div>
  )
}
Header.propTypes = {}
export default Header