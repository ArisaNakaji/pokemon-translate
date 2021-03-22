import logo from './logo.svg';
import pokeball from './pokeball.png'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeball} className="App-logo" alt="logo" />
        {/* https://pngimg.com/image/27658 */}
        <p>
          pokemon name 🇺🇸 → 🇯🇵 dictionary
        </p>
        {/* <button
          className="button"
          onClick={() => {
            searchView();
          }}
        >
          Search
            </button> */}
      </header>
    </div>
  );
}

export default App;
