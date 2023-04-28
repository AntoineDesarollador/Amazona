
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import data from "./data.js"
import HomeScreen from "./screens/HomeScreen.js";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
    <a href='/'>Amazona</a>

      </header>

    <main>
    <Routes>
    <Route   path='/' element={<HomeScreen />}/>
    </Routes>
      <h1>List products</h1>

      
      <div className='list-products'>
        {
          data.products.map(product => (
          <div className='products' key={product.slug}>

        <a href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
        </a>
            <a href={`/product/${product.slug}`} >
          <p>{product.name}</p>
          </a>
          <p><strong>$ {product.price}</strong></p>
          <button>Add to cart</button>
        </div>))

        }
        </div>
      

      </main>
    </div>
    </BrowserRouter> 
  );
}

export default App;

