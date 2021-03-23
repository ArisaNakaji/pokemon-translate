//react
import { react, useState, useEffect } from 'react';

//img
import pokeball from './pokeball.png'
import pokelogo from './pokemon_logo.png'

//css
import './App.css';

//compornents
import Search from './components/search';

function App() {
  const [view, setView] = useState("start");

  const toSearch = (() => setView("search"));

  return (
    <div className="App">
      <header className="App-header">
        {/* https://pngimg.com/image/27658 */}
        {view === "start" &&
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
      </header>
    </div>
  );
}

export default App;
