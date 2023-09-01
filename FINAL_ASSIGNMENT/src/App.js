import Actions from "./Components/Actions";
import "./App.css";
import ReviewHeader from "./Components/NavBar";
import Profile from "./Components/Profile";
import Newesticon from "./asserts/bar-chart.svg";
import Filter from "./asserts/filter.svg";
import TotalReviews from "./Components/TotalRevies";
import RightSide from "./Components/RightSide";
import Sidebar from "./Components/SideBar";
import Footer from "./Components/Footer";
import { Button } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import DataDisplay from "./redux/container";

function App() {
  return (
    <div className="main">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div>
        <div className="fullpage">
          <div className="User_Profile">
            <ReviewHeader className="Navmedia" />
          </div>
          <div>
            <Profile />
          </div>
          <div>
            <Actions />
          </div>

          <div>
            <div className="ReviewHeading">Reviews</div>
            <button className="Newest">
              <img src={Newesticon} alt="img" />
              Newest
            </button>

            <button className="Filter">
              <img src={Filter} alt="img" />
              Filters<div className="NoOfFilters">1</div>
            </button>
          </div>
          <TotalReviews />
          <RightSide />

          <Footer />
          <Button className="LoadMore">Load more</Button>
          <Provider store={store}>
            <DataDisplay />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
