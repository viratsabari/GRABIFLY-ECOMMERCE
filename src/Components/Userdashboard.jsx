import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../Styles/Userdashboard.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userdashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('http://localhost:3012/addproducts');
        setProducts(res.data);
      } 
      catch (error) {
        alert("Can't fetch data");
      }
    };
    fetchData();
  }, []);

  const addtocart = async (productId) => {
    try {
    
      const res = await axios.get('http://localhost:3012/viewcart');
      const cartdata = res.data;
      const duplicate = cartdata.some((item) => item.id === productId);
      if (duplicate) {
        toast.error("Product is already in the cart");
        
    }
     else{
      const productToAdd = products.find((product) => product.id === productId);
       await axios.post('http://localhost:3012/viewcart', productToAdd);
      toast.success("Product added to cart");
      }
    } catch (error) {
      toast.error("Cannot add product to cart");
    }
  };

  return (
    <div className="userproductslist">
      {products.map((product) => (
        <div className="displayitems" key={product.id}>
          <div className="items">
            <h1>Product Name: {product.name}</h1>
            <h1>Stocks Available: {product.quantity}</h1>
            <h1>Product Type: {product.ptype}</h1>
            <img src={product.pimage} alt={product.name} />
            <p>Product details: {product.pdetails}</p>
            <h1>Price: ${product.price}</h1>
            <button
              onClick={() => addtocart(product.id)}
              className="cart-btn"
            >
              <ShoppingCartCheckoutIcon /> ADD TO CART
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Userdashboard;
