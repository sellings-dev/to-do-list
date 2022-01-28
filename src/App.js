import './App.css';
import List from './components/List/List';

function App() {
  return (
    <div className="container">
      <header className="appHeader">
        <h1>TO-DO LIST</h1>
      </header>
      <div className='appContent'>
        <List />
      </div>
    </div>
  );
}

export default App;
