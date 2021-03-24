//react
// import { react, useState, useEffect } from 'react';

//css
import "../result.css"

const Result = (props) => {
  console.log("jpName: ", props.jpName)

  return (
    <div className="result">
      <div className="display">
        {props.jpName === "" &&
          <p className="nopoke">no pokemon</p>}
        {props.jpName !== "" &&
          <>
            <p>{props.poke}</p>
            <p>{props.jpName}です</p>
          </>
        }
      </div >
    </div>
  )
};

// const wrongPoke = (resultName) => {
//   if (resultName === undefined) {
//     return (
//       <>
//         <p>ポケモンがありません</p>
//       </>
//     )
//   } else {
//     <>
//       {/* <p>{props.poke}</p> */}
//       <p>{resultName}</p>
//     </>
//   }
// }

export default Result;