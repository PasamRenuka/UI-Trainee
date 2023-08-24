import { AppMainDiv,RouteLink } from "./Components";
import { Button } from "antd";
import Edit from "./Edit";
import Profile from "./profile";
import { useState } from "react";
function Combine({Logintoggle}) {
  const [showElement, setShowElement] = useState(false);
  const [editData,setEditData]=useState([])
  const toggleElements = (flag,data) => {
    setShowElement(flag);
    setEditData(data)
    console.log("clicked");
  };
  const HandleLogin=()=>{
    Logintoggle();
  }
  return (
    <AppMainDiv>
      {console.log("data--12", showElement)}

      {showElement && <Profile profileData={editData} toggleElements={toggleElements} />}
      {!showElement && <Edit toggleElements={toggleElements} />}
      <Button type="primary" id="Logout-Button" onClick={HandleLogin}> <RouteLink to="/" >LogOut</RouteLink></Button>
    </AppMainDiv>
  );
}
export default Combine