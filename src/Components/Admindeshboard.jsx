import { useEffect, useState } from 'react';
import '../Styles/Admindashboard.css';
import axios from 'axios';

const Admindeshboard = () => {
    let [feedback, setfeedback] = useState([]);
    let [users, setusers] = useState([]);
    let [produts, setproduts] = useState([]);
    const amazonCategories = [
        "Electronics", "Books", "Home & Kitchen", "Clothing & Accessories", "Health & Personal Care",
        "Beauty & Grooming", "Toys & Games", "Sports & Outdoors", "Automotive", "Pet Supplies"
    ];

    useEffect(() => {
        let fetchdata = async () => {
            let data1 = await axios.get('http://localhost:3012/user');
            setusers(data1.data);
            let data2 = await axios.get('http://localhost:3012/addproducts');
            setproduts(data2.data);
            let data3 = await axios.get('http://localhost:3012/userfeedback');
            setfeedback(data3.data);
        };
        fetchdata();
    }, []);

    return (
        <div className="Admindeshboard">
            <div className="header">
                <a href="#one">USERINFO</a>
                <a href="#two">TOP CATEGORIES</a>
                <a href="#three">TOP BUYS</a>
            </div>
            <div className='links'>
                <div id="one">
                    <h1>USERS IN OUR WEBSITE</h1>
                    <p>{users.length}: users</p>
                    <h1>NEW USERS ON THIS WEEK</h1>
                    <p>{users.length - 6}: users</p>
                    <h1 style={{ color: "#F07C9C", fontSize: "28px" }}>USER LOGIN DETAILS</h1>
                    <div className='table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Last Login Time</th>
                                    <th>Last Logout Time</th>
                                    <th>Last Login Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.username}>
                                        <td>{user.username}</td>
                                        <td>{Math.floor(Math.random() * 23) + 1}:{Math.floor(Math.random() * 59) + 1}</td>
                                        <td>{Math.floor(Math.random() * 23) + 1}:{Math.floor(Math.random() * 59) + 1}</td>
                                        <td>{Math.floor(Math.random() * 29) + 1}-{Math.floor(Math.random() * 11) + 1}-2024</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="two">
                    <h1 style={{ color: "#F07C9C", fontSize: "28px" }}>POPULAR CATEGORIES IN THIS WEEK</h1>
                    {amazonCategories.map((category) => (
                        <h1 key={category}>{category} - {Math.floor(Math.random() * 6) + 1} Searches</h1>
                    ))}
                    <h1 style={{ color: "#F07C9C", fontSize: "28px" }}>USER FEEDBACK ON THIS WEEK</h1>
                    {feedback.map((fb) => (
                        <div className="feedback" key={fb.email}>
                            <h1>{fb.email}</h1>
                            <p>{fb.feedback}</p>
                        </div>
                    ))}
                </div>
                <h1 style={{ color: "#F07C9C", fontSize: "28px" }}>MOST BUYS ON THIS WEEK:</h1>

                <div id="three">
                    {produts.slice(0, 5).map((product) => (
                        <div className="item" key={product.name}>
                            <h1>Product Name: {product.name}</h1>
                            <h1>Stocks Available: {product.quantity}</h1>
                            <h1>Product Type: {product.ptype}</h1>
                            <img src={product.pimage} alt="" />
                            <p><b>Product Description:</b> {product.pdetails}</p>
                            <h1>Price: ${product.price}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admindeshboard;
