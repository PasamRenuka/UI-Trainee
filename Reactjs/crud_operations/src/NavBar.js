import "./Contact";
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
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
