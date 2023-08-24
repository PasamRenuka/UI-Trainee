import {EditImgmain,Img1,ChooseImage,EditImgmain2,Cancel,ChooseImage2,Img2,PublishName,Name,LastName,EditDetails,Save,Posturl,HeadLine,Vertical,PublishDiv,Label,MainDiv,EditNav,SaveDiv,ImgButton1,ImgButton2} from './Components'
import { useState } from 'react';
import './App.css';
function Edit(props){
    const { toggleElements } = props;
    const URL1="https://pro.devtest.experience.com/reviews"
    const [show,setShow]=useState(true)

    const [profileDetail,setProfile]=useState()
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [headline, setHeadline] = useState('');
    const [publishname, setPublishName] = useState('');
    const [postUrl, setPostUrl] = useState('');
    const [file, setFile] = useState();
    const [file2, setFile2] = useState();

    const handlePublishName = (e) => {
        setPublishName(e.target.value);
      }
    const handleChangeName = (e) => {
        setName(e.target.value);
      }
      const handleHeadline = (e) => {
        setHeadline(e.target.value);
      }
      const handleLastName = (e) => {
        setLastName(e.target.value);
      }
      const handlePostUrl = (e) => {
        setPostUrl(e.target.value);
      }
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleChange2(e) {
        console.log(e.target.files);
        setFile2(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = (e) => {
    
    let EditData={
        displayimage1:file,
        displayimage2:file2,
        displaypublishname:publishname,
        displayname:name,
        displaylastname:lastname,
        displayheadline:headline,
        displayposturl:postUrl,
        displaypost:URL1
        
        }
        setShow(false)
        setProfile(EditData)
        toggleElements(true,EditData)
        
            e.preventDefault();
    

    }
   
    
    
    const handleClear = (e) => {
        e.preventDefault();
    setName("")
    setLastName('')
    setHeadline('')
    setPublishName(' ')
    setFile('')
    setFile2('')
    setPostUrl('')
    }
    return( 
       
        <MainDiv>
           {show && <div>
            <EditNav>
                <SaveDiv>
            <Cancel onClick={handleClear} id="cancle" >Cancel</Cancel>
            <Save onClick={(e) => { handleSubmit(e) }} id="save">Save</Save>
            </SaveDiv>
            </EditNav>
            <EditImgmain style={{backgroundImage:`url(${file})`,backgroundSize:'cover'}}>
                   <Img1>
                   <ImgButton1 > 
                   <ChooseImage type="file" onChange={handleChange} id='image1'/></ImgButton1>
                   </Img1>
            </EditImgmain>
            <EditImgmain2 style={{backgroundImage:`url(${file2})`,backgroundSize:'cover'}}>
                   <Img2>
                   <ImgButton1 > 
                   <ChooseImage2 type="file" onChange={handleChange2} id='image2' /></ImgButton1>
                  
                   </Img2>
                   {/* <ImgButton2 src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png"></ImgButton2> */}

                   
            </EditImgmain2>
            <PublishDiv>
                   <Label>Publish Name</Label><br/>

                <PublishName placeholder='Enter Publish Name' id="publishName" value={publishname} required onChange={(e) => { handlePublishName(e) }} />
                </PublishDiv><br/>
            <EditDetails>
                <table>
               <tr> <td><Label>Name</Label><br/>
                <Name placeholder='Enter Name' value={name} id="Name" required onChange={(e) => { handleChangeName(e) }}/></td>
                <td><Label>Last Name</Label><br/>

                <LastName placeholder='Enter Last Name' id="LastName" value={lastname} required onChange={(e) => { handleLastName(e) }}/></td></tr>
                <tr> <td><Label>HeadLine</Label><br/>
                <HeadLine value={headline} required onChange={(e) => { handleHeadline(e) }} id="Headline"/></td>
                <td><Label>Vertical</Label><br/>
                <Vertical placeholder='Mortage' disabled/></td></tr>
                <tr><td><Label>Post Url</Label><br/>
                <Posturl disabled placeholder='https://pro.devtest.experience.com/reviews' ></Posturl></td>
                <td>
                    <Label> </Label><br/>
                    <Name value={postUrl}  onChange={(e) => { handlePostUrl(e) }} id="posturl"/></td>
                </tr>
                </table>
            </EditDetails>
            </div>}
     
            

        </MainDiv>
    );
}
export default Edit
