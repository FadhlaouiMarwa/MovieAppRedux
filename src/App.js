import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';

function App() {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="App">
      <NavBar setInputSearch={setInputSearch}/>
      <AddMovie/>
      <MovieList inputSearch={inputSearch}/>
      
    </div>
  );
}

export default App;
