import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'
const Button = (props) => {
    console.log(props);
    return (
        <button type={props.type} className={style.Button} onClick={(evt) => {
            if (undefined !== props.onClick && typeof props.onClick === 'function') {
                props.onClick('click');
            }
        }}>
            {props.children}
        </button >
    );
}
Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    onClick: PropTypes.func
}
Button.defaultProps = {
    type: 'button',
    onClick: () => { console.log('fghjkl');}
}
export default Button