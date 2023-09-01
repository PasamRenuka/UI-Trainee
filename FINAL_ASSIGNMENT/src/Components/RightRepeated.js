import Star from "../asserts/Frame.png";

function Rightrepeated() {
  const repeatedStar = Array.from({ length: 5 }, (_, index) => (
    <img src={Star} alt="img" style={{ marginRight: "1px" }} />
  ));
  return (
    <div>
      <div className="CustomersTotal">
        <div className="customerProfile">
          <div className="customerProfile_2"></div>
          <div className="CustomerDetails">
            <div className="CustomerName">Madelyn Septimus</div>
            <div className="CustomerAdress">Loan Consultant</div>

            <div className="CustomerRating">
              <div className="CustomerScore">5.0</div>
              <div>{repeatedStar}</div>
              <div className="NoOfRatingCustomer">(9,999)</div>
            </div>
          </div>
          <div className="Top">
            <div className="Top_5">Top 5%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightrepeated;
