import React from 'react'
import PropTypes from 'prop-types'
import style from './Header.module.css'
const Header = (props) => {
  return (
    <div style={style.Header} data-testid="Header">
      {props.children}
    </div>
  )
}
Header.propTypes = {
  children: PropTypes.any.isRequired,
}
export default Header