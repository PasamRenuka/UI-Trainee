import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="list">
            <Link to="/" className="Link">
              Home
            </Link>
          </li>
          <li className="list">
            <Link to="/blogs" className="Link">
              Post
            </Link>
          </li>
          <li className="list">
            <Link to="/contact" className="Link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
