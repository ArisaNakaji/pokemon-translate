//react
import React, { useState, useEffect } from 'react';

//css
import "../result.css"

const Result = (props) => {

  return (
    <div className="result">
      <div className="display">
        {props.jpName === "" &&
          <p className="nopoke">no pokemon</p>}
        {props.jpName !== "" &&
          <>
            <p >{props.jpName}です</p>
          </>
        }
      </div >
    </div>
  )
};

export default Result;