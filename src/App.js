import { Routes, Route } from 'react-router-dom';
import { Header } from './components/navigation/Header';
import { Beer } from './pages/beers/Beer';
import { Beers } from './pages/beers/Beers';
import { NewBeer } from './pages/beers/NewBeer';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container mx-auto p-3 md:p-4">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/beers" element={<Beers/>}/>
            <Route path="/beers/new/" element={<NewBeer/>}/>
            <Route path="/beers/random/" element={<Beer random={true}/>}/>
            <Route path="/beers/:beerId" element={<Beer/>}/>
          </Routes>
        </div>
        
    </div>
  );
}

export default App;
