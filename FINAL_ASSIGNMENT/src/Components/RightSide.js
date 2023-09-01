import Searchbar from "../asserts/Searchbar";
import Rightrepeated from './RightRepeated'
import "../App.css";
import SearchMap from "../asserts/searchMap.jpg";

function RightSide() {
    const repeatedStar = Array.from({ length: 5 }, (_, index) => (
        
        <div  className="RightRepeatted"> <Rightrepeated /></div>
      ));
  return (
    <div className="RightSideMain">
      <div className="RightHeading">Find Nearby Professionals</div>
      <Searchbar className="Searchbar_map"></Searchbar>
      <img  className="SearchImg"
        src={SearchMap}
        alt="img"
        
      ></img>
      <div className="Map"></div>
     
     <div >{repeatedStar }</div>
     <div className="Professionals">Browse more Professionals</div>
     <div className="Rightseperator"></div>
     <div className="Ads"><div className="Ads_2">Ads / Sponsored Content</div></div>
     <div className="Rightseperator"></div>
     <div className="TopProfessionals">Top Rated Professionals</div>
     <div >{repeatedStar }</div>
     <div className="Professionals">Browse more Professionals</div>
     <div className="Rightseperator"></div>
     <div className="Ads"><div className="Ads_2">Ads / Sponsored Content</div></div>
     <div className="Rightseperator"></div>
     <div className="TopProfessionals">Top Searched Professionals</div>
     <div >{repeatedStar }</div>
     <div className="Professionals">Browse more Professionals</div>
     <div className="Rightseperator"></div>
     <div className="Ads"><div className="Ads_2">Ads / Sponsored Content</div></div>
    </div>
  );
}

export default RightSide;
