import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './MemeForm.module.css';
import { emptyMeme } from 'orsys-tjs-meme'
import Button from '../../ui/Button/Button';
const MemeForm = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt)=>{
        evt.preventDefault();
        //props.onMemeChange(state);
      }} onReset={(evt)=>{
        props.onMemeChange(emptyMeme);
      }}>
        <label htmlFor="titre">
        <h1>Titre</h1></label>
        <br />
        <input name="titre" id="titre"
          value={props.currenttitre}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, titre: evt.target.value })
          }} />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" value={props.currentimageId}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, imageId: Number(evt.target.value) })
          }}>
          <option value="-1">No image</option>
          {props.images.map((e, i) => <option key={`select-image-${i}`} value={e.id}>{e.titre}</option>
          )}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={props.currenttext}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, text: evt.target.value })
          }} />
        <br />
        <label htmlFor="x">
          <h2 >x :</h2>
        </label>
        <input className={style.smallNumber} name="x" id="x" type="number"
          value={props.currentx}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, x: Number(evt.target.value) })
          }} />
        <label htmlFor="y">
          <h2 >y :</h2>
        </label>
        <input className={style.smallNumber} name="y" id="y" type="number"
          value={props.currenty}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, y: Number(evt.target.value) })
          }} />
        <hr />
        <br />
        <h3>Decorations</h3>
        <label htmlFor="color">
          <h2 >color :</h2>
        </label>
        <input name="color" id="color" type="color" value={props.currentcolor}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, color: evt.target.value })
          }} />
        <br />
        <label htmlFor="fontSize">
          <h2 >font-size :</h2>
        </label>
        <input className={style.smallNumber} name="fontSize" id="fontSize" type="number" min="0"
          value={props.currentfontSize}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, fontSize: Number(evt.target.value) })
          }} /><br />
        <label htmlFor="fontWeight">
          <h2 >font-weight :</h2>
        </label>
        <input className={style.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value={props.currentfontWeight}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, fontWeight: evt.target.value })
          }} />
        <br />
        <input name="underline" id="underline" type="checkbox"
          checked={props.currentunderline}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, underline: evt.target.checked })
          }} />
        &nbsp;
        <label htmlFor="underline">
          <h2 >underline</h2>
        </label>&nbsp;
        <h2 >/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 >italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox"
          checked={props.currentitalic}
          onChange={(evt) => {
            props.onMemeChange({ ...props.current, italic: evt.target.checked })
          }}
        />
        <hr />
        <Button type='reset' className='error'>Annul</Button>
        <Button type='submit' className="primary">Annul</Button>
        <br />
      </form>
    </div >
  );
};

MemeForm.propTypes = {
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
  current: PropTypes.shape({
    id: PropTypes.number,
    titre: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    fontWeight: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    underline: PropTypes.bool.isRequired,
    italic: PropTypes.bool.isRequired,
  }).isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;
