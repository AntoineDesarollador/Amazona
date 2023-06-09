
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
    <Link to='/'>Amazona</Link>

      </header>

    <main>
    <Routes>
    <Route path='/product/:slug' element={<ProductScreen />}/>
    <Route path='/' element={<HomeScreen />}/>
    </Routes>
 

      </main>
    </div>
    </BrowserRouter> 
  );
}

export default App;

