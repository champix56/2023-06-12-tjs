import React from 'react'
import PropTypes from 'prop-types'
import style from './Footer.module.css'
const Footer = (props) => {
  return (
    <div className={style.Footer} data-testid="Footer">
   orsys &copy; 2023
    </div>
  )
}
Footer.propTypes = {}
export default Footer