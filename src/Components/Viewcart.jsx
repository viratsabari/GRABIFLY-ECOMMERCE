import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Viewcart.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Viewcart() {
  let [viewcartitems,setviewcartitems]=useState([]);
  let fetchdata=async () => {
    try{
      let cartdata=await axios.get('http://localhost:3012/viewcart')
      setviewcartitems(cartdata.data)
    }    
    catch{
         toast.error("connot fetch data");
         
    }  
  }
    fetchdata();
 
      function deleteitem(id) {
        axios.delete(`http://localhost:3012/viewcart/${id}`)
        .then(()=>{
          toast.success("product remove from cart")
          setviewcartitems(viewcartitems.filter((check)=>{
             return check.id !== id;
          }))
        })
      }

   
  



  return (
    <div className="viewcart">
      <div className="userproductslist">
        {viewcartitems.map((product) => (
          <div className="displayitems" key={product.id}>
            <div className="items">
              <h1>Product Name: {product.name}</h1>
              <h1>Stocks Available: {product.quantity}</h1>
              <h1>Product Type: {product.ptype}</h1>
              <img src={product.pimage} alt={product.name} />
              <p>Product details: {product.pdetails}</p>
              <h1>Price: ${product.price}</h1>
              <button className="delete-btn" onClick={()=>deleteitem(product.id)}><DeleteIcon /> Remove Items</button>
            </div>
          </div>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Viewcart;
