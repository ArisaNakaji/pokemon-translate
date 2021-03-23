//library
import React, { useState } from 'react';

//css
import './App.css';

//compornents
import Start from './components/start';
import Search from './components/search';
import Result from './components/result';

function App() {
  const [poke, setPoke] = useState("")
  const [jpName, setJpName] = useState("")

  const [view, setView] = useState("start");

  return (
    <div className="App">
      <header className="App-header">
        {/* https://pngimg.com/image/27658 */}
      </header>
      {view === "start" &&
        <>
          <Start 
          view={view} 
          setView={setView} />
        </>
      }
      {view === "search" &&
        <>
          <Search 
          view={view} 
          setView={setView} 
          poke={poke} 
          setPoke={setPoke} 
          jpName={jpName} 
          setJpName={setJpName} />
        </>
      }
      {view === "result" &&
        <>
          <Result 
          view={view} 
          setView={setView} 
          poke={poke} 
          setPoke={setPoke} 
          jpName={jpName} 
          setJpName={setJpName} />
        </>}
    </div>
  );
}

export default App;
