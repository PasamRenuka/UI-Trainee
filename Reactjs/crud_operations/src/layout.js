import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="list">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;