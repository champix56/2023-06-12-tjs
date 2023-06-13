import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
export const initialStateMemeForm = {}
const MemeForm = (props) => {
  const [state, setstate] = useState(initialStateMemeForm)
  useEffect(() => {
    //cmp didmount
    console.log(`composant MemeForm monté`);
    return () => {
      //cleanup
      console.log(`composant MemeForm demonté`);
    };
  }, [])
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form><label htmlFor="titre">
        <h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre" value="React is easy" />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value="Le js m'a tué" />
        <br />
        <label htmlFor="x">
          <h2 >x :</h2>
        </label>
        <input className={style.smallNumber} name="x" id="x" type="number" value="121" />
        <label htmlFor="y">
          <h2 >y :</h2>
        </label>
        <input className={style.smallNumber} name="y" id="y" type="number" value="65" />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 >color :</h2>
        </label>
        <input name="color" id="color" type="color" value="#FFFFFF" />
        <br />
        <label htmlFor="fontSize">
          <h2 >font-size :</h2>
        </label>
        <input className={style.smallNumber} name="fontSize" id="fontSize" type="number" min="0" value="73" />px<br />
        <label htmlFor="fontWeight">
          <h2 >font-weight :</h2>
        </label>
        <input className={style.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value="900" />
        <br />
        <input name="underine" id="underline" type="checkbox" />
        &nbsp;
        <label htmlFor="underline">
          <h2 >underline</h2>
        </label
        >&nbsp;
        <h2 >/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 >italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" />
        <hr />
        <br />
      </form>
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
