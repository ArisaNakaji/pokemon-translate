//library
import { react, useState, useEffect } from 'react';
import axios from 'axios';

//img
import pokeball from './pokeball.png'
import pokelogo from './pokemon_logo.png'

//css
import './App.css';

//compornents
import Start from './components/start';
import Search from './components/search';
import Result from './components/result';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then((res) => {
        console.log("res: ", res)
        // return res.json()
        return setMessage(res.data);
      })
    // fetch('/api')
    //   .then((res) => {
    //     console.log("res: ", res)
    //     // return res.json()
    //     return res;
    //   })
    //   .then((data) => {
    //     console.log("data: ", data.body)
    //     // return setMessage(data)
    //   });
  }, []);



  const [view, setView] = useState("start");

  const toSearch = (() => setView("search"));

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        {/* https://pngimg.com/image/27658 */}
        {view === "start" &&
          // <>
          //   <Start view={view} setView={setView} />
          // </>
          <div>
            <button className="startButton" type="button"
              onClick={() => { toSearch() }}>
              <img src={pokeball} className="pokeball" alt="logo" />
            </button>
            <p>pokemon name 🇺🇸 → 🇯🇵 dictionary</p>
          </div>
        }
        {view === "search" &&
          <>
            <Search view={view} setView={setView} />
          </>
        }
        {view === "result" &&
          <>
            <Result view={view} setView={setView} />
          </>
        }
      </header>
    </div>
  );
}

export default App;
