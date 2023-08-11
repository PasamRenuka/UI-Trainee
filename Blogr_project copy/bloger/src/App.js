// import "./App.css";
import {
  Sample,
  Nav,
  Navtop,
  BlogrHeading,
  Menu,
  Dropdown,
  B,
  LoginDiv,
  LoginSignup,
  H1,
  NavPara,
  StartLearn,
  CombineSection1,
  Section2,
  ParaSection,
  HeadingSection2,
  Section2Para,
  DesktopImg,
  CombineSection2,
  Phone,
  PhonePara,
  Heading2,
  SubPara,
  FinalSection,
  Laptop,
  FinalSubPara,
  FinalSubPara2,
  FinalHeading,
  Footer,
  FooterAll,
  FooterBloger,
  H2,
  TD,
  TH,
  Table,
} from "./Components";
import laptop from "./images/laptop.svg";
import phone from "./images/phone.svg";
import desktop from "./images/desktop.svg";
import arrow from "./images/arrow.svg";

function App() {
  return (
    <Sample>
      <Nav>
        <Navtop>
          <div>
            <BlogrHeading>Blogr</BlogrHeading>
            <Menu>
              <Dropdown>
                <B>Product </B>
                <img src={arrow} alt=""></img>
              </Dropdown>
              <Dropdown>
                <B>Company </B>
                <img src={arrow} alt=""></img>
              </Dropdown>
              <Dropdown>
                <B>Contact </B>
                <img src={arrow} alt=""></img>
              </Dropdown>
            </Menu>
          </div>

          <LoginDiv>
            <LoginSignup>
              <B>Login</B>
            </LoginSignup>
            <LoginSignup>
              <B>Sign Up</B>
            </LoginSignup>
          </LoginDiv>
        </Navtop>
        <H1>A modern publishing platform</H1>
        <div>
          <NavPara>Grow your audience and bulid your online brand</NavPara>
        </div>
        <StartLearn>
          <B>Start for Free</B>
        </StartLearn>
        <StartLearn>
          <B>Learn More</B>
        </StartLearn>
      </Nav>
      <section>
        <CombineSection1>
          <section>
            <section>
              <Section2>Designed for the future</Section2>
            </section>
            <ParaSection>
              <HeadingSection2>
                Introducing an extensible editor
              </HeadingSection2>
              <Section2Para>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </Section2Para>
              <HeadingSection2>Robust content management</HeadingSection2>
              <Section2Para>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </Section2Para>
            </ParaSection>
          </section>
          <section>
            <DesktopImg
              src={desktop}
              width="60px"
              height="60px"
              alt="imgloading"
            ></DesktopImg>
          </section>
        </CombineSection1>
      </section>
      <CombineSection2>
        <section>
          <Phone
            src={phone}
            width="60px"
            height="60px"
            alt="imgloading"
          ></Phone>
        </section>
        <PhonePara>
          <Heading2>State of the Art Infrastructure</Heading2>
          <SubPara>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </SubPara>
        </PhonePara>
      </CombineSection2>
      <FinalSection>
        <section>
          <Laptop
            src={laptop}
            width="60px"
            height="60px"
            alt="imgloading"
          ></Laptop>
        </section>
        <FinalSubPara>
          <FinalHeading>Free, open, simple</FinalHeading>
          <FinalSubPara2>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </FinalSubPara2>
          <FinalHeading>Powerful tooling</FinalHeading>
          <FinalSubPara2>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </FinalSubPara2>
        </FinalSubPara>
      </FinalSection>
      <section>
        <Footer>
          <FooterAll>
            <Table>
              <tr>
                <FooterBloger>
                  <H2>Blogr</H2>
                </FooterBloger>
                <TH>Product</TH>
                <TH>Company</TH>
                <TH>Connect</TH>
              </tr>
              <tr>
                <TD></TD>
                <TD>Overview</TD>
                <TD>About</TD>
                <TD>Contact</TD>
              </tr>
              <tr>
                <TD></TD>
                <TD>Pricing</TD>
                <TD>Team</TD>
                <TD>Newsletter</TD>
              </tr>
              <tr>
                <TD></TD>
                <TD>Marketplace</TD>
                <TD>Blog</TD>
                <TD>LinkedIn</TD>
              </tr>
              <tr>
                <TD></TD>
                <TD>Features</TD>
                <TD>Careers</TD>
              </tr>
              <tr>
                <TD></TD>
                <TD>Integrations</TD>
              </tr>
            </Table>
          </FooterAll>
        </Footer>
      </section>
    </Sample>
  );
}

export default App;
