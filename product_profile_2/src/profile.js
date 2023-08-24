import { styled } from 'styled-components';
import {EditImgmain,EditImgmain2,PublishDiv,Label} from './Components'
import { Button, Space } from 'antd';

const Profile=({profileData,toggleElements})=>{
    return( 
      <div >
       
       <EditImgmain style={{backgroundImage:`url(${profileData.displayimage1})`,backgroundSize:'cover'}}>
       <nav style={{backgroundColor:"ThreeDDarkShadow"}}>{profileData.displaypost}{profileData.displayposturl}</nav>
            </EditImgmain>
            <EditImgmain2 style={{backgroundImage:`url(${profileData.displayimage2})`,backgroundSize:'cover'}}>   
            </EditImgmain2>
            <PublishDiv>
                <Label>{profileData.displaypublishname}</Label><br></br>
                <Label >{profileData.displayheadline}</Label>
            </PublishDiv>
            <Space wrap>
    <Button type="primary"onClick={()=>toggleElements(false,profileData)} style={{marginLeft:'400px',marginTop:'15px'}} id="edit">Edit</Button>
    </Space>
            
      </div>
    );
}
export default Profile