//react
import React, { useState } from 'react';
import axios from 'axios';

//css
import "../search.css"

const Search = (props) => {
  let result;

  const toSearch = () => {
    axios.get('api/pokemon/' + props.poke)
      .then((res) => {
        result = res.data[0].japanese_name;
        setResult(result);
      })
      .catch(error => {
        console.log("error: ", error.response)
      });
    //画面遷移
    goResult();
  };

  const toError = () => {
    props.setError(true);
  }


  const setResult = (result) => {
    props.setJpName(result)
  }

  const searchPoke = (pokeWord) => props.setPoke(pokeWord);

  const goResult = (() => props.setView("result"));

  return (
    <div className="search">
      <div className="display">
        <p>{props.view}</p>
        <p>please write pokemon!</p>
        <p>name:
        <input
            type="text"
            name="name"
            placeholder="Let's search!"
            onChange={(e) => {
              (searchPoke(e.target.value))
            }}
          ></input></p>
        <button
          className="searchButton"
          type="button"
          onClick={() => {
            console.log("onclick: ", props.poke);
            (props.poke === "") ? toError() : toSearch();
          }}
        >Search!</button >
        {props.error === true &&
          <p className="error novalue">入力してください</p>}
      </div>
    </div >
  )
};

export default Search;