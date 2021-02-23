import logo from './logo.svg';
import './App.css';

const newDate = new Date();
const currentYear = newDate.getFullYear()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <main>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi, dolorem, blanditiis maiores laboriosam repellendus recusandae iure fugiat voluptas fugit veniam obcaecati velit, soluta assumenda saepe voluptatibus? Dicta, optio est.</h1>
      </main>
      <footer>"copyright by Me"{currentYear}</footer>
    </div>
  );
}

export default App;
