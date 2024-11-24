import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Adminnavigate from './Adminnavigate'
import '../Styles/Adminnavbar.css'
const Adminnavbar = () => {
    return ( 
         <div className="adminnavbar">
            <div className="logo">
                GRABIFY
            </div>
            <div className="links">
                <Link to='/Adminhomepage/Addproducts'>Add products</Link>
                <Link to='/Adminhomepage/Productlist'>product list</Link>
                <Link to='/Adminhomepage/Admindeshboard'>dashboard</Link>
                
            </div>
            <div className="dropdown">
                <Adminnavigate/>
            </div>
         </div>
     );
}
export default Adminnavbar;