//react
// import { react, useState, useEffect } from 'react';

//img
import pokeball from '../../src/pokeball.png'

const Start = (props) => {
  const goSearch = (() => props.setView("search"));

  return (
    <div>
      <button className="startButton" type="button"
        onClick={() => { goSearch() }}>
        <img src={pokeball} className="pokeball" alt="logo" />
      </button>
      <p>pokemon name 🇺🇸 → 🇯🇵 dictionary</p>
    </div>
  )
};

export default Start;