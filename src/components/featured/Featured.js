import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
  
  return (
    <div className="featured">
      <div className="top">
        <h1 className="total">Total Revenue</h1>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar  value={80} text={"80%"} strokeWidth={5}  />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">$456</p>
        <p className="desc">
          Previous transation processing. Last payment may be included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.56k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.56k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.56k</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured