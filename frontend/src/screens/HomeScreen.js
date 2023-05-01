
import { Link } from "react-router-dom";
import data from "../data.js";
import { useEffect, useState } from "react";

function HomeScreen(){

const [products, setProducts] = useState([]);
useEffect(() => {
  const fetchData = async() => {
    const result = await axios.get("http://localhost:3000/api/products");
    setProducts(result.data);
  }; 
  fetchData();
}, []);

    return(
<div>
    <h1>List products</h1>

      
<div className='list-products'>
  {
    data.products.map(product => (
    <div className='products' key={product.slug}>

  <Link to={`/product/${product.slug}`}>
  <img src={product.image} alt={product.name} value={product.slug} />
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