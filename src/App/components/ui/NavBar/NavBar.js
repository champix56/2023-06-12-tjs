import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
const NavBar = (props) => {
  return (
    <div style={style.NavBar} data-testid="NavBar">
      {props.children}
    </div>
  )
}
NavBar.propTypes = {
  children: PropTypes.any.isRequired,
}
export default NavBar