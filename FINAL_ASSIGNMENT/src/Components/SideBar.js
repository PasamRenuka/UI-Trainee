import three from "../asserts/threeDots.svg";
import DashBoard from "../asserts/dashboard.svg";
import Drop from "../asserts/drop.svg";
import Userpic from "../asserts/user.svg";
import leftReviews from "../asserts/message-square.svg";
import leftEdit from "../asserts/edit.svg";
import book from "../asserts/book-open.svg";
import UserCheck from "../asserts/user-check.svg";
import monitor from "../asserts/monitor.svg";
import database from "../asserts/database.svg";
import settings from "../asserts/settings.svg";
import Campaign from "../asserts/campaign.svg";
import Listings from "../asserts/listings.svg";
import widgets from "../asserts/widgets.svg";
function Sidebar() {
  return (
    <div>
      <div className="experience_logo"></div>
      <div className="menu">
        Menu
        <img
          src={three}
          alt=""
          style={{ height: "16px", width: "16px", marginLeft: "190px" }}
        />
      </div>
      <div className="Dashboard">
        <img src={DashBoard} alt="img" />
        Dashboard
        <img src={Drop} alt="img" style={{ marginLeft: "118px" }} />
      </div>

      <div className="leftProfile">
        <div>
          <div className="scroll"></div>
        </div>
        <img
          src={Userpic}
          alt="img"
          style={{ marginLeft: "2px", marginRight: "3px" }}
        />
        Profile
      </div>
      <div className="leftReviews">
        <img
          src={leftReviews}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Reviews
      </div>
      <div className="leftReviews">
        <img
          src={leftEdit}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Profile Enhancement
      </div>
      <div className="leftReviews">
        <img
          src={book}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Knowledge
      </div>
      <div className="leftReviews">
        <img
          src={UserCheck}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Referrals
      </div>
      <div className="leftReviews">
        <img
          src={monitor}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Reports
      </div>
      <div className="leftReviews">
        <img
          src={database}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Integrations
      </div>
      <div className="leftReviews">
        <img
          src={settings}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Settings
      </div>
      <div className="leftDivider"></div>
      <div className="menu">
        Features
        <img
          src={three}
          alt=""
          style={{
            height: "16px",
            width: "16px",
            marginLeft: "165px",
            marginTop: "5px",
          }}
        />
      </div>
      <div className="leftReviews">
        <img
          src={Campaign}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Campaingns
      </div>
      <div className="leftReviews">
        <img
          src={Listings}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Listings
      </div>
      <div className="leftReviews">
        <img
          src={widgets}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Widgets
      </div>
      <div className="leftReviews">
        <img
          src={monitor}
          alt="img"
          style={{ marginLeft: "16px", marginRight: "3px" }}
        />
        Social Monitor
      </div>
      <div className="leftDivider"></div>
    </div>
  );
}

export default Sidebar;
