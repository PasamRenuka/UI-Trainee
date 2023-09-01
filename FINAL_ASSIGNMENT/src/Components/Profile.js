import { Button } from "antd";
import Star from "../asserts/Frame.png";
import Share from "../asserts/share";
import Edit from "../asserts/Edit";

function Profile() {
  const repeatedStar = Array.from({ length: 5 }, (_, index) => (
    <img src={Star} alt="img" style={{ marginRight: "1px" }} />
  ));
  return (
    <div className="Profile">
      <div className="squareProfile">
        <Button className="mortage">
          <div className="mortage_2">Mortage</div>
        </Button>
      </div>
      <div>
        <div className="circleProfile">
          <div className="circleProfile_2"></div>
          <div className="UserDetails">
            <div className="UserName">Stephen Marshall</div>
            <div className="UserAdress">
              Senior Loan Consultant. NMLS #406037
            </div>

            <div className="Rating">
              <div className="ScoreRating">5.0</div>
              <div>{repeatedStar}</div>
              <div className="NoOfRating">(9,999)</div>
            </div>
          </div>
        </div>
        <div className="CompanyDetails">
          <div className="Adress1">
            <div className="Location">Location</div>
            <div className="Better">Betterndorf,IA</div>
          </div>

          <div className="Adress2">
            <div className="Adress1">
              <div className="Location2">Works at</div>
              <div className="NewAmerica">New American Funding,</div>
            </div>
            <div className="number">+1</div>
          </div>
          <div className="Company_logo"></div>
        </div>
      </div>
      <div className="saperator"></div>
      <div>
        <div className="Share">
          {" "}
          <Share />
        </div>
        <div className="Edit">
          {" "}
          <Edit />
        </div>
        <Button className="Ask">Ask for Referral</Button>
      </div>
    </div>
  );
}

export default Profile;
