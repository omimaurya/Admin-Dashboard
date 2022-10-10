import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
           <div className="search">
               <input type="text" placeholder="Search..."/>
               <SearchIcon/>
           </div>

           <div className="items">
              <div className="item">
                <LanguageIcon className="icon"/>
                English
              </div>

              <div className="item">
                <DarkModeIcon className="icon"/>
                Darkmode
              </div>

              <div className="item">
                <FullscreenExitIcon className="icon"/>
                
              </div>

              <div className="item">
                <NotificationsActiveIcon className="icon"/>
                 <div className="counter">8</div>
              </div>

              <div className="item">
                <ChatBubbleOutlineIcon className="icon"/>
                <div className="counter">8</div>
              </div>

              <div className="item">
                <FormatListBulletedIcon className="icon"/>
                
              </div>

              <div className="item">
                <img src="./img.jpg" alt="" className="avater"/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar;