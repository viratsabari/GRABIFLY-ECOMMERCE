import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Usernavigate from './Usernavigate'

import '../Styles/Usernavbar.css'
const Usernavbar = () => {
    return ( 
         <div className="usernavbar">
            <div className="logo">
                GRABIFLY
            </div>
            <div className="links">
                <Link to='/Userhomepage/Viewcart'>view cart</Link>
                <Link to='/Userhomepage/Myorders'>My ordes</Link>
                 <input type="text" id="search"/>
                 <button>Search</button>
                
            </div>
            <div className="dropdown">
                <Usernavigate/>
            </div>
         </div>
     );
}
export default Usernavbar;