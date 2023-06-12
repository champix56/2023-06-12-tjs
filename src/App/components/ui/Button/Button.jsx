import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'
const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} className={style.Button}>
            {props.children }
        </button>
    );
}
Button.propTypes={
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button','reset','submit']).isRequired
}
Button.defaultProps={
    type:'button'
}
export default Button