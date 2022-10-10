import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {
    let data;

    const amount=233;
    const diff=20;

    switch(type){
        case "user":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all user",
            icon:<PersonOutlineIcon className="icon" style={{color:"crimson",background:"rgba(255,0,0,0.2)"}}/>,
        };
        break;

        case "order":
        data={
            title:"ORDERS",
            isMoney:false,
            link:"Views all orders",
            icon:<LocalGroceryStoreIcon className="icon" style={{color:"goldenrod",background:"rgba(218,165,32,0.2)"}}/>,
        };
        break;

        case "earning":
        data={
            title:"EARNING",
            isMoney:true,
            link:"View net earnings",
            icon:<CurrencyRupeeIcon className="icon" style={{color:"green",background:"rgba(0,128,0,0.2)"}}/>,
        };
        break;

        case "balance":
        data={
            title:"BALANCE",
            isMoney:true,
            link:"View net earnings",
            icon:<AccountBalanceWalletIcon className="icon" style={{color:"purple",background:"rgba(128,0,128,0.2)"}}/>,
        };
        break;
        default:
            break;

        
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
            {data.isMoney && "$"}{amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
           <div className="percentage positive">
             <KeyboardArrowUpIcon/>
             {diff}%
           </div>
             {data.icon}
        </div>
    </div>
  )
}

export default Widget;