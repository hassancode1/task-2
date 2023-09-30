import { Menu } from "antd";
import "antd/dist/reset.css";

import styled  from "styled-components";
import { 
  HomeOutlined, 
  UsergroupAddOutlined, 
  CarryOutOutlined,
  BranchesOutlined,
  FileTextOutlined,
  LayoutOutlined,
  HeartOutlined,
  LeftOutlined,
  SettingOutlined

} from "@ant-design/icons";


const SideBarHeader = styled.div`

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  

`
const SideBarIcon = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    gap: 25px;
`

const Gray = styled.span`
  
  padding: 15px;
  display: flex  ;
    border-radius: 50%;
    background: #D9D9D9;
`

const LastIcon= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 25px;
gap: 25px;
`
const ASpan = styled.span`
  
    color: #B1CDFD;
    border-radius: 100px;
    height: 35px;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    display: flex;
    width: 35px;
    font-size: 12px;
    background-color: #D7E5FD;

`
const SideBar: React.FC = () => {
  return (
    <SideBarHeader className="header">
      <Menu mode="vertical" style={{position:"fixed", top:"0", height:"100%", padding:"18px"}}>

        <SideBarIcon className="icon-tags">
          <Gray className="grey"></Gray>
          <HomeOutlined  style={{ fontSize: '18px', color:"#0B0B0B" }}  /> 
        
          <UsergroupAddOutlined  style={{ fontSize: '18px', color:"#0B0B0B" }}/>
          
          <CarryOutOutlined style={{ fontSize: '18px', color:"#0B0B0B" }} />
       
          <BranchesOutlined style={{ fontSize: '18px',color:"#0B0B0B" }}/>
      
       <FileTextOutlined style={{ fontSize: '18px', color:"#0B0B0B" }} />
     
         <LayoutOutlined  style={{ fontSize: '18px', color:"#0B0B0B" }}/>
          
          <HeartOutlined  style={{ fontSize: '18px', color:"#0B0B0B" }}/>
         
         <LeftOutlined  style={{ fontSize: '18px' ,color:"#0B0B0B" }}/>
         
        </SideBarIcon>

        <LastIcon className="settings" style={{ marginTop: "100px" }}>
           <SettingOutlined style={{ fontSize: '18px' }}/>
          <ASpan className="As">AS</ASpan>
        </LastIcon>
      </Menu>
    </SideBarHeader >
  );
}

export default SideBar;

