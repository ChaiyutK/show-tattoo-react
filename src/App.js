import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos.js';

function App() {

  const tattooElement = tattoos.map((tattoo,index) => {
    return <TattooItem key={index} tattoo={tattoo} />;
  });
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
      {tattooElement}
      </div>
    </div>
  );
}

export default App;
