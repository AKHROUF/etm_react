import logo from './logo.svg';
import './App.css';
import Liste from './Liste';

function App() {
  var x = 500;
  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height:500}} className="App-logo" alt="logo" width={x} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Liste table="patients" page={x}  />
      
    </div>
  );
}

export default App;
