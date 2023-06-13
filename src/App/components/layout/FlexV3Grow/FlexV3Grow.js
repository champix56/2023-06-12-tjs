import React from 'react'
import PropTypes from 'prop-types'
import style from './FlexV3Grow.module.css'
const FlexV3Grow = (props) => {
  return (
    <div style={style.FlexV3Grow} data-testid="FlexV3Grow">
      {props.children}
    </div>
  )
}
FlexV3Grow.propTypes = {
  children: PropTypes.any.isRequired,
}
export default FlexV3Grow