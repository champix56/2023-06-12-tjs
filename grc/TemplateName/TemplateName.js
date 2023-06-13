import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';
export const initialStateTemplateName={}
const TemplateName = (props) => {
  const [state, setstate] = useState(initialStateTemplateName)
  useEffect(() => {
    //cmp didmount
    console.log(`composant TemplateName monté`);
    return () => {
      //cleanup
      console.log(`composant TemplateName demonté`);
    };
  }, [])
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
