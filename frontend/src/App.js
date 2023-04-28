
import './App.css';
import data from "./data.js"



function App() {
  return (
    <div className="App">
      <header className="App-header">
    <a href='/'>Amazona</a>
    <nav>
      <ul>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
      </header>

    <main>

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
  );
}

export default App;

