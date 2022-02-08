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
      <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="benzchaiyut" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FFDD00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
    </div>
  );
}

export default App;
