import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      NavBar
    </div>
  )
}
NavBar.propTypes = {
}
export default NavBar