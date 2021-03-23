//react
import React from 'react';
import axios from 'axios';

const Search = (props) => {
  let result;
  const toSearch = () => {
    axios.get('api/pokemon/' + props.poke)
      .then((res) => {
        result = res.data[0].japanese_name;
        setResult(result);
      });
    //画面遷移
    goResult();
  };


  const setResult = (result) => {
    props.setJpName(result)
  }

  const searchPoke = (pokeWord) => { props.setPoke(pokeWord) };

  const goResult = (() => props.setView("result"));

  return (
    <div>
      <div className="pokedex"></div>
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
          toSearch()
        }}
      >Search!</button >
    </div >
  )
};

export default Search;