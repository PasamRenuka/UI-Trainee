import CopyRight from "../asserts/CopyRght.svg";

function Footer() {
  return (
    <div>
      <div className="FooterBoder">
        <img src={CopyRight} alt="img" className="copyright" />
        <div className="footerData_1">
          2015 - 2022 <div className="footerData_2">Experience.com</div> created
          by BuyersRoad, Inc. All rights reserved.
        </div>
        <div className="footerRight">
          Privacy Policy <div className="FooterDivider">|</div> Accessiblity
          Statement
        </div>
      </div>
    </div>
  );
}

export default Footer;
