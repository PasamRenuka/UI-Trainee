import "./App.css";
import DesktopIcon from "./DesktopIcon";
import laptop from "./images/illustration-laptop-desktop.jpg";
import phone from "./images/phone.jpg";
import desktop from "./images/desktop.svg";


function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav_top">
          <div>
            <h2>Blogr</h2>
            <div className="menu">
              <div id="dropdown">
                <b>Product</b>{" "}
              </div>
              <div id="dropdown">
                <b>Company</b>
              </div>
              <div id="dropdown">
                <b>Contact</b>
              </div>
            </div>
          </div>
          <div>
            <button className="login_signup" id="login">
              <b>Login</b>
            </button>
            <button className="login_signup">
              <b>Sign Up</b>
            </button>
          </div>
        </div>
        <h1>A modern publishing platform</h1>
        <div>
          {" "}
          <h5 id="nav_para">Grow your audience and bulid your online brand</h5>
        </div>
        <button className="Start_learn" id="start">
          <b>Start for Free</b>
        </button>
        <button className="Start_learn">
          <b>Learn More</b>
        </button>
      </nav>
      <section className="sec1">
        
        <section id="combine_section">
       
        
        <section id="left_section">
        <section>
          <h3 id="section_2">Designed for the future</h3>
        </section>
        <section id="para_section">
          <h5 id="heading_section2">Introducing an extensible editor</h5>
          <p id="section_2_para">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h5  id="heading_section2">Robust content management</h5>
          <p id="section_2_para">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
          </section>
        </section>
        <section id="right_section">
          <img id='desktop_img' src={desktop} width="60px" height="60px" alt="imgloading"></img>
        </section>
        </section>
      </section>
      <section>
        <section>
          <img src={phone} width="60px" height="60px" alt="imgloading"></img>
        </section>
        <section>
          <h5>State of the Art Infrastructure</h5>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
      </section>
      <section>
        <section>
          <img src={laptop} width="60px" height="60px" alt="imgloading"></img>
        </section>
        <section>
          <h5>Free, open, simple</h5>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h5>Powerful tooling</h5>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
        <section>
          <footer>
            <section id="footer_All">
              <table>
                <tr>
                  <th id="footer_bloger">
                    <h2>Blogr</h2>
                  </th>
                  <th>Product</th>
                  <th>Company</th>
                  <th>Connect</th>
                </tr>
                <tr>
                  <td></td>
                  <td>Overview</td>
                  <td>About</td>
                  <td>Contact</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Pricing</td>
                  <td>Team</td>
                  <td>Newsletter</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Marketplace</td>
                  <td>Blog</td>
                  <td>LinkedIn</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Features</td>
                  <td>Careers</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Integrations</td>
                </tr>
              </table>
            </section>
          </footer>
        </section>
      </section>
    </div>
  );
}

export default App;
