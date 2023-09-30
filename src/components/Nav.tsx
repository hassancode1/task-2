
import { Typography, Select, Button } from "antd";
import "antd/dist/reset.css";

import { TagsOutlined,
     UserDeleteOutlined,
      UserAddOutlined,
     UserSwitchOutlined,
    DownOutlined,
    MailOutlined
    
    } from "@ant-design/icons/lib/icons";
     import styled  from "styled-components";
import PageContent from "./PageContent";


const SiderElementContained = styled.div`
display:flex;
flex-direction: column;
height: 100%;

`
const Selectstyle = styled(Select)`
  & .ant-select-selection-placeholder{
    color:#1D4ED8;
    font-weight:bold;
    border-radius: 10px;
    font-size: 15px; 
  }
 
  & .ant-select-selector {
border: none;
padding: 3px;
border-radius: 15px;

}
& .ant-btn{
  border: none;
}
 
 `

     const SideBarContainer =styled.div`
        display: flex;
    justify-content: space-evenly;
    margin: 15px;
    width:100%;`
     const Selected = styled.div`
        width: 20%;
     `
     const NavIcons= styled.div`
     display: flex;
     gap: 10px; 
     `
     const TypeContainer = styled.div`
       display: flex;
       flex-direction: column;
       
     `
     
    
const { Option } = Select;

const Nav = () => {
  const oppotunity = [
    { label: "applied", num: 1762 },
    { label: "shortlisted", num: 465 },
    { label: "Technical Interview", num: 123 },
    { label: "Opportunity Browsing", num: 243 },
    { label: "Video Interview I", num: 25 },
    { label: "Video Interview II", num: 25 },
    { label: "Video Interview III", num: 25 },
    { label: "Offer", num: 25 },
    { label: "Offer", num: 25 },
    { label: "Offer", num: 25 },
  ];

  return (
    <SiderElementContained>
    <SideBarContainer>
      <TypeContainer>
      <Typography.Title style={{ color: "#1D4ED8", fontSize: "20px" }}>
        London internship program
      </Typography.Title>
    <Typography.Paragraph style={{color:"#0B0B0B"}}>London</Typography.Paragraph>
      </TypeContainer>   
      <Selected className="selected">
        <Selectstyle
     
          mode="multiple"
          placeholder="Opportunity Browsing"
          style={{width:"100%", borderRadius:"20px", }}
          maxTagCount={35} 
          dropdownStyle={{height:"400px", }} 
         
        >
          {oppotunity.map((item, index) => (
            <Option
              key={index}
              value={item.label}
             
            >
            <div style={{display: "flex", justifyContent: "space-between", lineHeight: "1.5" , }}>
          <h3>{item.label}</h3>
          <h3>{item.num}</h3>
          </div>
          
            </Option>
          ))}
        </Selectstyle>
      </Selected>

      <NavIcons className="Nav-icons">
       <TagsOutlined style={{ fontSize: '20px', backgroundColor:"#fff", padding:"9px", borderRadius:"9%", color:"#0B0B0B", height:"50%"}} />
       <UserDeleteOutlined style={{ fontSize: '20px', backgroundColor:"#fff", padding:"9px", borderRadius:"9%", color:"#A80000", height:"50%" }} />
       <UserAddOutlined style={{ fontSize: '20px', backgroundColor:"#fff", padding:"9px", borderRadius:"9%", color:"#0B0B0B" , height:"50%"}} />
       <UserSwitchOutlined style={{ fontSize: '20px', backgroundColor:"#fff", padding:"9px", borderRadius:"9%", color:"#0B0B0B", height:"50%" }} />
       <MailOutlined style={{ fontSize: '20px', backgroundColor:"#fff", padding:"9px", borderRadius:"9%", color:"#0B0B0B", height:"50%" }}  />
       <Button style={{backgroundColor:"#1D5ECD", color:"#fff", border:"none", fontSize:'14px', 
      }}  > Move to video interview    <DownOutlined style={{marginLeft:"1.5rem"}}/></Button >
       </NavIcons>
   
      

   
    </SideBarContainer>
    <PageContent/>
    </SiderElementContained>
  );
};

export default Nav;
