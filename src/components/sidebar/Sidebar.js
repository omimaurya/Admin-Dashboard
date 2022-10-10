import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">OmiDashboard</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                <PersonIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                <ProductionQuantityLimitsIcon className="icon" />
                    <span>Product</span>
                </li>
                <li>
                <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                <AirportShuttleIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFULL</p>
                <li>
                    <AssessmentIcon className="icon"/>
                    <span>Start</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                     <HealthAndSafetyIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <LoginIcon className="icon"/>
                    <span>Logs In</span>
                </li>
                <li>
                <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USERS</p>
                <li>
                <PermIdentityIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                <ExitToAppIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
        </div>
    </div>
  )
}

export default Sidebar