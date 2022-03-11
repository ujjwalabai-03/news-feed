import './App.css';
import Header from './components/Header.js'
import CategoriesSelection from './components/CategoriesSelection.js'
import SearchBar from './components/SearchBar.js'
import NewsItems from './components/NewsItems.js'

function App() {
  return (
    <div className="App app-border">
      <Header />
      <CategoriesSelection />
      <SearchBar />
      <NewsItems />
    </div>
  );
}

export default App;
