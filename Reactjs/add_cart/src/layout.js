import { Outlet, Link } from "react-router-dom";

const Layout = ({data}) => {
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
            <Link to="/Cart" className="Link">
              Cart  <button>{data.length}</button>
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
