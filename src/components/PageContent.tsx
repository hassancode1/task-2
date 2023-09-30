
import "antd/dist/reset.css";
import { Button, List, Typography,   } from "antd";

import Candidate from "./Candidate";
import styled  from "styled-components";
import { 
    SearchOutlined,
    InfoCircleOutlined,
    DownOutlined,
  FileTextOutlined
   
   } from "@ant-design/icons/lib/icons";


  const PageContentContainer = styled.div`
    display: flex;
 margin: 80px auto;
    gap: 50px;
    
  `
  const FilterContainer = styled.div`
    display: flex;
     gap: 20px;
    flex-direction: column;
    margin: 0 auto;
 
  `

    const FilteredListContainer = styled.div`
    display: flex;
    align-items: center;

  `;



const PageContent = () =>{
return(
    <PageContentContainer>
        <FilterContainer>


       <Button style={{color:"#9AA6AC", fontSize:"15px",height:"34px", borderRadius:'5px' }} >  <SearchOutlined style={{fontSize:"18px"}}/>search by name, edu exp or #tag  <InfoCircleOutlined style={{marginLeft:"30px"}}/></Button>
      
      
       <FilteredListContainer>
       <List  style={{backgroundColor:"#fff", width:"330px", padding:"10px", }}>
        <List.Item style={{display:"flex", alignItems:"center", justifyContent:"space-between",  }}><Typography.Paragraph style={{fontWeight:"700"}}>Filter</Typography.Paragraph><Typography.Paragraph> 0 selected</Typography.Paragraph> </List.Item>
      
      <List.Item   style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography.Paragraph  style={{fontWeight:"bold"}} ><FileTextOutlined style={{margin:"8px", fontWeight:"bold"}}/>Personal information </Typography.Paragraph>   <DownOutlined style={{color:"#2626a6"}}/>
       </List.Item>


       <List.Item   style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography.Paragraph  style={{fontWeight:"bold"}} ><FileTextOutlined style={{margin:"8px", fontWeight:"bold"}}/>Education</Typography.Paragraph>   <DownOutlined style={{color:"#2626a6"}}/>
       </List.Item>
  
       <List.Item   style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography.Paragraph  style={{fontWeight:"bold"}} ><FileTextOutlined style={{margin:"8px", fontWeight:"bold"}}/>Work Experience </Typography.Paragraph>   <DownOutlined style={{color:"#2626a6"}}/>
       </List.Item>

       <List.Item   style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography.Paragraph  style={{fontWeight:"bold"}} ><FileTextOutlined style={{margin:"8px", fontWeight:"bold"}}/>Activity Filter </Typography.Paragraph>   <DownOutlined style={{color:"#2626a6"}}/>
       </List.Item>

       <List.Item   style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography.Paragraph  style={{fontWeight:"bold"}} ><FileTextOutlined style={{margin:"8px", fontWeight:"bold"}}/>Advanced Filter </Typography.Paragraph>   <DownOutlined style={{color:"#2626a6"}}/>
       </List.Item>
  
        </List>
    </FilteredListContainer>
        </FilterContainer>

    <Candidate/>
    </PageContentContainer>
)
}
export default PageContent