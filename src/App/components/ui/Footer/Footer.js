import React from 'react'
import PropTypes from 'prop-types'
import style from './Footer.module.css'
const Footer = (props) => {
  return (
    <div style={style.Footer} data-testid="Footer">
      {props.children}
    </div>
  )
}
Footer.propTypes = {
  children: PropTypes.any.isRequired,
}
export default Footer