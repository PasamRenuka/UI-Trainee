import  "./ContactUs";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ display: "inline-block" }}>
        <h1>FlipCart</h1>
      </div>
      <div
        className="links"
        style={{ display: "inline-block", marginLeft: "500px" }}
      >
        <a href="/Home" style={{ marginRight: "15px" }}>
          Home
        </a>
        <a href="#Contact" className="Con">Contact us</a>
        <a href="#post" className="Con" style={{marginLeft:"15px"}}>Update</a>
      
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
