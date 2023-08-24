import { styled } from "styled-components";
import { Link } from 'react-router-dom';
export const Sample = styled.div`
  text-align: center;
`;

export const Nav = styled.nav`
  background-image: url("./bg-pattern-intro-desktop.svg"),
    linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
  background-size: 2000px;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 90px;
  border-radius: 0px 0px 0px 90px;
  margin-bottom: 110px;
  height: 510px;
`;

export const Navtop = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
`;

export const BlogrHeading = styled.h2`
  color: white;
  display: inline;
  margin-left: 110px;
  margin-right: 100px;
  font-size: 45px;
`;
export const Menu = styled.div`
  display: inline;
  margin-right: 350px;
  margin-left: -70px;
`;
export const Dropdown = styled.div`
  display: inline;
  color: white;
  padding-left: 20px;
  font-size: small;
`;

export const B = styled.b`
  font-size: 16px;
`;

export const LoginDiv = styled.div`
  margin-right: 100px;
  margin-top: 10px;
`;

export const LoginSignup = styled.button`
  color: white;
  background: none;
  border-radius: 25px;
  padding: 15px;
  border: none;
  width: 130px;
  font-size: 18px;
  // &&:hover {
  //   background-color: white;
  //   color: rgb(255, 80, 91);
  // }
`;
export const H1 = styled.h1`
  color: white;
  font-size: 65px;
  margin: 0%;
  margin-top: 100px;
`;
export const NavPara = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 0.3px;
  margin-bottom: 50px;
`;

export const StartLearn = styled.button`
  color: white;
  background: none;
  border-radius: 25px;
  padding: 15px;
  width: 140px;
  border: 1px solid white;
  margin-top: 10px;
  margin-right: 20px;
  &&:hover {
    background-color: white;
    color: rgb(255, 80, 91);
  }
`;

export const CombineSection1 = styled.section`
  display: flex;
  width: 100%;
`;

export const Section2 = styled.h3`
  color: hsl(208, 49%, 24%);
  font-size: 35px;
  text-align: center;
  margin-left: 500px;
  margin-top: 60px;
`;
export const ParaSection = styled.section`
  margin-top: 90px;
  text-align: start;
  margin-right: 200px;
  width: 700px;
`;

export const HeadingSection2 = styled.h5`
  color: hsl(208, 49%, 24%);
  margin-left: 150px;
  font-size: 28px;
`;

export const Section2Para = styled.p`
  margin-left: 150px;
  width: 555px;
  color: hsl(207, 13%, 34%);
  letter-spacing: 0.5px;
  line-height: 30px;
  margin-top: -15px;
`;

export const DesktopImg = styled.img`
  width: 950px;
  height: 900px;
  margin-left: -130px;
  margin-top: -15px;
  margin-bottom: 50px;
`;

export const CombineSection2 = styled.section`
  display: flex;
  background-color: rgb(58, 59, 89);
  height: 400px;
  border-radius: 0px 100px 0px 100px;
  background-image: url("./bg-pattern-circles.svg"),
    linear-gradient(to right, hsl(237, 23%, 32%), hsl(237, 17%, 21%));
  background-repeat: no-repeat;
  background-position: bottom -150px left -200px;
  background-size: 1000px;
`;

export const Phone = styled.img`
  width: 550px;
  height: 580px;
  margin-top: -70px;
  margin-left: 120px;
`;

export const PhonePara = styled.section`
  text-align: start;
  width: 500px;
  font-size: 16px;
  margin-left: 70px;
  margin-top: 60px;
`;

export const Heading2 = styled.h5`
  color: white;
  font-size: 35px;
`;

export const SubPara = styled.p`
  color: white;
  letter-spacing: 0.5px;
  margin-top: -30px;
  line-height: 30px;
  font-size: 15px;
`;

export const FinalSection = styled.section`
  display: flex;
  margin-top: 105px;
  margin-bottom: 120px;
`;

export const Laptop = styled.img`
  width: 960px;
  height: 800px;
  margin-left: -270px;
`;
export const FinalSubPara = styled.section`
  margin-top: 150px;
  margin-left: 50px;
  text-align: start;
  width: 550px;
`;

export const FinalSubPara2 = styled.p`
  margin-top: -20px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 30px;
  color: hsl(207, 13%, 34%);
`;

export const FinalHeading = styled.h5`
  color: hsl(208, 49%, 24%);
  font-size: 30px;
  letter-spacing: 0.5px;
`;

export const Footer = styled.footer`
  background-color: hsl(240, 10%, 16%);
  padding-top: 35px;
  height: 325px;
  border-radius: 0px 70px 0px 0px;
`;

export const FooterAll = styled.section`
  display: inline;
  justify-content: space-around;
`;
export const FooterBloger = styled.th`
  text-align: center;
`;

export const H2 = styled.h2`
  color: white;
  display: inline;
  font-size: 40px;
`;

export const TD = styled.td`
  color: hsl(240, 2%, 79%);
  font-size: 15px;
  padding: 5px;
  text-align: start;
`;
export const TH = styled.th`
  font-size: 16px;
  padding-bottom: 15px;
  color: white;
  text-align: start;
`;
export const Table = styled.table`
  width: 90%;
  margin-top: 20px;
  margin-left: 20px;
`;
export const EditImgmain=styled.section`
width: 500px;
  height: 250px;
  background-color: rgb(218,218,218);
  
`

export const Img1=styled.div`
input[type=file]::file-selector-button {
  position: relative;
  top: 150px;
  font-family: calibri;
  width: 150px;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: 1px dashed #BBB;
  text-align: center;
  background-color: #DDD;
}
`
export const ChooseImage=styled.input`
   width: 150px;
   height: 150px;

`

export const EditImgmain2=styled.section`
width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: -70px;
  border: 5px solid white;
  // display:flex;
  background-color: rgb(218,218,218);


  
`
export const ChooseImage2=styled.input`
   width: 150px;
   height: 150px;

`
export const Img2=styled.div`

input[type=file]::file-selector-button {
  position: relative;
  top: 150px;
  font-family: calibri;
  width: 150px;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: 1px dashed #BBB;
  text-align: center;
  background-color: #DDD;
}
`
export const PublishName=styled.input`
margin-top: 15px;
width:300px;
height:30px;

`
export const Name=styled.input`
margin-top: 15px;
width:250px;
height:30px;

`
export const LastName=styled.input`
margin-top: 15px;
width:250px;
height:30px;
`
export const HeadLine=styled.input`
margin-top: 15px;
width:250px;
height:30px;
`
export const Vertical=styled.input`
margin-top: 15px;
width:250px;
height:30px;
&&:hover{
  cursor:not-allowed;
}
`
export const Posturl=styled.input`
margin-top: 15px;
width:250px;
height:30px;
&&:hover{
  cursor:not-allowed;
}
`
export const EditDetails=styled.section`
margin-top: 25px;

  
`
export const Save=styled.button`
width: 70px;
height: 30px;
margin-right:10px;
color: white;
border-radius: 5px;
padding:5px;
background-color: rgb(26,99,169);
border: none;
// cursor: not-allowed;
  
`
export const Cancel=styled.button`
width: 90px;
height: 30px;
margin-right:10px;
border: none;
  color: blue;
  background-color: white;
  
`
export const PublishDiv=styled.div`
margin-top: -90px;
margin-left:250px;
width:300px;

  
`
export const Label=styled.label`

  
`
export const MainDiv=styled.div`
width: 600px;
margin-left:450px; 
`
export const EditNav=styled.nav`
margin-top:15px;  
margin-bottom:25px;  
width:600px;
`
export const SaveDiv=styled.div`
margin-left:350px;
  
`
export const AppMainDiv=styled.div`
display:flex;
width:100vh;
height:100vh;
  
`
export const EditButton=styled.button`

width:100px;
height:30px;
  
`
export const ImgButton1=styled.button`

width:50px;
height:50px;
border-radius:50%;
background-image: url('https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png');
background-size: cover;
  
`
export const ImgButton2=styled.img`

width:50px;
height:50px;
border-radius:50%;
margin-top:-40px;

  
`


// export const Links=styled.a`
// color: rgb(255, 80, 91);
// text-decoration: none;
// margin-left: 60px;
// @media (max-width:400px) {
//     margin-left: 5px;
// }
// &:hover {
//     text-decoration: underline;
//   }
// `
export const RouteLink=styled(Link)`

color: white;
// &&hover{
//   color: rgb(255, 80, 91);
// }
`


export const LoginPageDiv=styled.div`
width:100vw;
height:100vh;
background-image: url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80');
background-repeat: no-repeat;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;
`
export const LoginContainer=styled.div`
background-color:white;
width:200px;
justify-content:space-between;
padding:30px;
height:200px;
display:flex;
flex-direction:column;
border-radius:10px;
`
