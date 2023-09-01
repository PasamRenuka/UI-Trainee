import { Button } from "antd";
import StarBlue from "../asserts/star.svg";
import Pin from "../asserts/pin";
import V from "../asserts/V.svg";
import erified from "../asserts/erified.svg";
import Customer from "../asserts/Customer.svg";
import CompanyIcon from "../asserts/logo_small.svg";
import Repeat from "../asserts/Repeat";
import Flag from "../asserts/Flag";
import BlackShare from "../asserts/BlackShare";
import ReplyDrop from "../asserts/ReplyDropdown";

function Reviews() {
  const repeatedStar = Array.from({ length: 5 }, (_, index) => (
    <img src={StarBlue} alt="img" style={{ marginRight: "1px" }} />
  ));
  return (
    <div className="mainReview">
      <div className="RatingDispaly">
        <div className="RatingStar">
          <div className="RatingScore">5.0</div>
          <div>{repeatedStar}</div>
          <Button className="Close">Close</Button>
        </div>
        <div className="CompanyLogo">
          <img
            src={V}
            alt="img"
            style={{
              width: "7.477px",
              height: "9.473px",
              flexShrink: "0",
              marginBottom: "-13px",
              marginLeft: "6px",
            }}
          />
          <img
            src={erified}
            alt="img"
            style={{
              width: "35.968px",
              height: "9.67px;",
              flexShrink: "0",
              marginBottom: "-13px",
              marginRight: "-6px",
            }}
          />
          <img
            src={Customer}
            alt="img"
            style={{ width: "53.219px", height: "9.748px", flexShrink: "0" }}
          />
          <img
            src={CompanyIcon}
            alt="img"
            style={{ width: "17.492px", height: "20.949px", flexShrink: "0" }}
          />
        </div>
      </div>
      <div className="UserInfo">
        <div className="UserPicBoder">
          <div className="Userpic"></div>
        </div>
        <div className="User_name">Marlee S</div>
        <div className="User_Address">Betterndorf, IA</div>
        <div className="PostingTime">Posted on Aug 04, 2022</div>
      </div>
      <div className="ReviewData">
        Amber Ernst answered everything we needed in a way that we understood
        and also in a very timely fashion. Her customer service skills are
        beyond excellent! Amber Ernst made us feel like a priority and went out
        of her way to rectify everything. Highly recommend!
      </div>
      <div className="SeperatorReview"></div>
      <div className="finalDisplay">
        <div className="pinBorder">
          <Pin />
        </div>
        <div
          style={{ marginLeft: "-200px", display: "flex", marginTop: "8px" }}
        >
          <div className="NoOfPins">1/3</div>
          <div className="VerticalSeperater"></div>
          <div className="message1">
            5 people
            <div className="message2">found this helpful</div>
          </div>
        </div>
        <div className="IconReview">
          <div className="RepeatBorder">
            <Repeat />
          </div>
          <div className="RepeatBorder">
            <Flag />
          </div>
          <div className="RepeatBorder">
            <BlackShare />
          </div>
          <Button className="Details">Details</Button>
          <div className="Reply">
            <div style={{ marginTop: "7.5px" }}>Reply</div>
            <div className="ReplySeperator"></div>
            <div
              style={{
                marginTop: "-35px",
                marginLeft: "73px",
                marginBottom: "5px",
              }}
            >
              <ReplyDrop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
