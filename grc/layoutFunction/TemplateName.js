import React from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css'
const TemplateName = (props) => {
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  )
}
TemplateName.propTypes = {
  children: PropTypes.any.isRequired,
}
export default TemplateName