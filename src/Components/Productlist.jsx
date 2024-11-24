import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/Productlist.css'
import { X } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Productlist = () => {
    let [products,setproducts]=useState([])
    let [force,setforce]=useState(0);
     useEffect(()=>{
     function fetchdata(){
        axios.get('http://localhost:3012/addproducts')
        .then((res)=>{
            setproducts(res.data)
        })
        .catch(()=>alert("can't fetch data"))
     }
     fetchdata();
    },[force])
    let navigate=useNavigate()
    let deletelist=(productid)=>{
         axios.delete(`http://localhost:3012/addproducts/${productid}`)
         .then(()=>{
            toast.error('deleted successfully')
        //     setproducts(products.filter((product) =>{ 
        //        return product.id !== productid
        //  }));
           setforce(force++);
         })
         .catch(()=>{
              toast.error("deleted failure")
         })
    }
   function updateproducts(productid){
       navigate(`/Adminhomepage/Updateproducts/${productid}`)
   }
    
        
    
    return ( 
        <div className="productlist">
            {
                products.map((product)=>{
                    return(
                        <div className="displayitems">
                        <div className="items">
                        <h1>Product Name:{product.name}</h1>
                        <h1>Stocks Availale:{product.quantity}</h1>
                        <h1>Product Type:{product.ptype}</h1>
                        <img src={product.pimage} alt="" />
                        <p><b>product descripition:</b>{product.pdetails}</p>
                        <h1>Price:${product.price}</h1>
                        <button className="update-btn" onClick={()=>{updateproducts(product.id)}}>UPDATE</button>
                        <button className="delete-btn" onClick={() =>{deletelist(product.id) }}><DeleteIcon /> DELETE</button>
                        </div>
                        </div>
                    )
                })
            }

        </div>
     );
}
 
export default Productlist;