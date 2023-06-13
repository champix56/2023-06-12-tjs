import React from 'react'
import PropTypes from 'prop-types'
import style from './FlexH1Grow.module.css'
const FlexH1Grow = (props) => {
  return (
    <div style={style.FlexH1Grow} data-testid="FlexH1Grow">
      {props.children}
    </div>
  )
}
FlexH1Grow.propTypes = {
  children: PropTypes.any.isRequired,
}
export default FlexH1Grow