import "./sidebar.scss";
import { Link, useNavigate} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    const {dispatch: authDispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            authDispatch({ type: "LOGOUT"});
            navigate("/login");
        })
        .catch((error) => {
            console.error("Logout error: ", error);
        });
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">Store</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className = "icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users">
                        <li>
                            <PersonPinIcon className = "icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <ProductionQuantityLimitsIcon className = "icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <FilterFramesIcon className = "icon" />
                        <span>Orders</span>
                    </li>
                    <Link to="/categories"> 
                        <li data-testid="categories">
                            <CategoryIcon className = "icon" />
                            <span>Categories</span>
                        </li>
                    </Link>

                    <p className="title">USER</p>
                    <li>
                        <FaceIcon className = "icon" />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <LogoutIcon className = "icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    );
};

export default Sidebar;