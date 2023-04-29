
import { Link } from "react-router-dom";
import data from "../data.js";

function HomeScreen(){
    return(
        <div>
    <h1>List products</h1>

      
<div className='list-products'>
  {
    data.products.map(product => (
    <div className='products' key={product.slug}>

  <Link to={`/product/${product.slug}`}>
  <img src={product.image} alt={product.name} />
  </Link>
      <Link to={`/product/${product.slug}`} >
    <p>{product.name}</p>
    </Link>
    <p><strong>$ {product.price}</strong></p>
    <button>Add to cart</button>
  </div>))

  }
  </div>

        </div>
    )
}

export default HomeScreen;