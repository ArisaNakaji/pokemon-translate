//react
import { react, useState, useEffect } from 'react';

//components
import Result from './result';


const Search = (props) => {
  console.log("search")
  console.log("props.view: ", props.view)
  const toSearch = () => { props.setView("result") };
  return (
    <div>
      {props.view === "search" &&
        <>
          <p>please write pokemon!</p>
          <p>name: <input type="text" name="name"></input></p>
          <button className="searchButton" type="button"
            onClick={() => { toSearch() }}
          >Search!</button >
        </>
      }
      {props.view === "result" &&
        <>
          <Result />
        </>
      }
    </div >
  )
};

export default Search;