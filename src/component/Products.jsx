import './product.css';
import context from '../contexts/createContext';
import { useContext } from 'react';

const Products = () => {
  const { datas } = useContext(context);

  return (
    <> 
      <h2 style={{ textAlign: 'center' }}>Data fetched from Context API</h2> 
      <div className='cont'>
        {datas.map((item) => (
          <div className='main' key={item.id}>
            <div className='imgs'>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='body'>
              <h1>{item.category}</h1> {/* Assuming category is a string */}
              <h4 style={{ color: 'green' }}>Price: ${item.price}</h4>
              <p>{item.title}</p>
            </div>
            <button className='btn' style={{ backgroundColor: 'green' }}>Add to Cart</button>
            <button className='btn' style={{ backgroundColor: 'orange' }}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
