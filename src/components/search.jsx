//react
import { react, useState, useEffect } from 'react';

//components
// import Result from './result';


const Search = (props) => {
  console.log("search")
  console.log("props.view: ", props.view)
  const toSearch = () => { return props.setView("result") };
  return (
    <div>
      <p>{props.view}</p>
      {props.view === "search" &&
        <>
          <p>please write pokemon!</p>
          <p>name: <input type="text" name="name"></input></p>
          <button className="searchButton" type="button"
            onClick={() => {
              console.log("onClick")
              toSearch()
              console.log("props.view: ", props.view)
            }}
          >Search!</button >
        </>
      }
    </div >
  )
};

export default Search;