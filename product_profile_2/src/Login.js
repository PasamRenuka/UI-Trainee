import { Link, Navigate, Outlet } from 'react-router-dom';
import { Button,Input } from "antd"
import { LoginContainer, LoginPageDiv } from "./Components"
const LoginPage = ({Logintoggle}) => {
const HandleLogin=()=>{
        Logintoggle();
        console.log("sample")
}
return (
        <LoginPageDiv>
            <LoginContainer>
                
                <Input id='LoginInput'  type='email' placeholder="Enter Your Email" />
                <Input id='LoginPassword' placeholder="Enter Your Password" />
                <Button id='LoginButton' type="primary" onClick={HandleLogin}>Login</Button>
                <Button id='ProtectedPageBtn' ><Link to="/Profile">Protected Page</Link></Button>
            </LoginContainer>
        </LoginPageDiv>
  )
}
export default LoginPage;