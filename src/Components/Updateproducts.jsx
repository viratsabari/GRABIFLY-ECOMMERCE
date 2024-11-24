import { useEffect, useState } from "react";
import '../Styles/Updateproducts.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Updateproducts(){
    let [name,setname]=useState("");
    let [quantity,setquantity]=useState("");
    let [ptype,setptype]=useState("");
    let [pdetails,setpdetails]=useState("")
    let [pimage,setpimage]=useState("");
    let [price,setprice]=useState("");
     let navigate=useNavigate();
    let update={name,quantity,ptype,pdetails,pimage,price}
    let params=useParams();
    function updateprdoct(e){
        e.preventDefault();
    axios.put(`http://localhost:3012/addproducts/${params.id}`,update)
    .then(()=>{
      toast.success("data upadted")
       navigate('/Productlist')})
    .catch(()=>toast.error("cannot update"))
      }
      useEffect(()=>{
          axios.get(`http://localhost:3012/addproducts/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            
            setname(res.data.name);
            setquantity(res.data.quantity);
            setptype(res.data.type);
            setpdetails(res.data.pdetails);
            setpimage(res.data.pimage);
            setprice(res.data.price);

        })
        .catch((err)=>alert("canot fetch data"))
     },[])








    return(
        <div className="updateproducts">
          <h1>ENTER PRODUCT DETAILS:</h1>
          <form onSubmit={updateprdoct}>
            <label htmlFor="">PRODUCT NAME</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required/>
            <label htmlFor="">PRODUCT QUANTITY</label>
            <input type="number" value={quantity} onChange={(e)=>setquantity(e.target.value)} required/>
            <label htmlFor="">PRODUCT TYPE</label>
            <select id="productType" value={ptype} name="productType" onChange={(e)=>setptype(e.target.value)}>
    <option value="electronics">Electronics</option>
    <option value="home-kitchen">Home & Kitchen</option>
    <option value="fashion">Fashion</option>
    <option value="books">Books</option>
    <option value="beauty-personal-care">Beauty & Personal Care</option>
    <option value="health-wellness">Health & Wellness</option>
    <option value="toys-games">Toys & Games</option>
    <option value="sports-outdoors">Sports & Outdoors</option>
    <option value="automotive">Automotive</option>
    <option value="pet-supplies">Pet Supplies</option>
    <option value="groceries">Groceries</option>
    <option value="office-supplies">Office Supplies</option>
    <option value="musical-instruments">Musical Instruments</option>
    <option value="tools-home-improvement">Tools & Home Improvement</option>
    <option value="jewelry-watches">Jewelry & Watches</option>
    <option value="garden-outdoors">Garden & Outdoors</option>
    <option value="baby-products">Baby Products</option>
    <option value="digital-content">Digital Content</option>
</select>
<label htmlFor="">PRODUCT DESCRIPTION</label>
<textarea name="" id="" value={pdetails} onChange={(e)=>setpdetails(e.target.value)}></textarea>
<label htmlFor="">PRODUCT IMAGE</label>
            <input type="url" value={pimage} onChange={(e)=>setpimage(e.target.value)} required/>
          <label htmlFor="">PRICE</label>
            <input type="number"  value={price} onChange={(e)=>setprice(e.target.value)} required/>
          
            <button><span>UPDATE PRODUCT</span></button>
          </form>
        </div>
    )
}
export default Updateproducts;
