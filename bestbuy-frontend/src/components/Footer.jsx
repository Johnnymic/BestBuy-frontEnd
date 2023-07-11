import React from 'react'
import styled from 'styled-components'
import {TbMailFilled} from 'react-icons/tb'
import {FaWhatsapp} from 'react-icons/fa'
import {BsTelephone}from 'react-icons/bs'
import {Link} from "react-router-dom"
import {AiOutlineApple} from "react-icons/ai"
import {AiOutlineGoogle} from "react-icons/ai"

function Footer() {
  return (

    <Foota>
      <FooterTopWrapper>
        <FooterTopWrapperContent>
           <FooterTopWrapperContentDiv>
                      <MesaageDiv>
                          <MessageLogo >
                          <TbMailFilled style={{margin: "9px", fontSize:"12px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>   
                     < MesaageDiv>
                          <MessageLogo >
                          <FaWhatsapp style={{margin: "9px", fontSize:"12px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>
                      <MesaageDiv>
                          <MessageLogo >
                          <BsTelephone style={{margin: "9px", fontSize:"12px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>
                     <EmailInput>
                        <input type="text" placeholder='Enter your email' name="" id="" />
                        <button>subscribe</button>
                     </EmailInput>
            </FooterTopWrapperContentDiv>
       </FooterTopWrapperContent>
          
     </FooterTopWrapper>
    <FooterWrapper>
       
    
     <FooterContainer>
        <FooterContentInfo1>
             <FooterTitle>
              <span>About Jumia</span>
             </FooterTitle>
             <FooterItems>
                  <DivItem1>
                  <Link to="/contact" >Contact us</Link>
                  </DivItem1>
                  <DivItem2>
                  <Link to="/contact" >About  us</Link>
                  </DivItem2>
                  <DivItem3>
                  <Link to="/contact" >Career</Link>
                  </DivItem3>

                  <DivItem4>
                  <Link to="/contact" >Our blog</Link>
                  </DivItem4>
                  <DivItem5>
                  <Link to="/contact"  >Forum</Link>
                  </DivItem5>
                  <DivItem6>
                  <Link to="/contact"  >Terms and Condition</Link>
                  </DivItem6>
               </FooterItems>
      </FooterContentInfo1>
      <FooterContentInfo2>
             <FooterTitle>
              <span>Payment</span>
             </FooterTitle>
             <FooterItems>
                  <DivItem1>
                  <Link to="/contact" >Jumia pay</Link>
                  </DivItem1>
                  <DivItem2>
                    
                  <Link to="/contact" >Wallet</Link>
                  </DivItem2>
                  <DivItem3>
                  <Link to="/contact" >Verve</Link>
                  </DivItem3>

                  <DivItem4>
                  <Link to="/contact" >MasterCard</Link>
                  </DivItem4>
                  <DivItem5>
                  <Link to="/contact"  >Visa</Link>
                  </DivItem5>
                 
               </FooterItems>
      </FooterContentInfo2>
      <FooterContentInfo3>
             <FooterTitle>
              <span>Buying on Jumia</span>
             </FooterTitle>
             <FooterItems>
                  <DivItem1>
                  <Link to="/contact" >Buying safe center</Link>
                  </DivItem1>
                  <DivItem2>
                  <Link to="/contact" >FAQs</Link>
                  </DivItem2>
                  <DivItem3>
                  <Link to="/contact" >Delivery</Link>
                  </DivItem3>

                  <DivItem4>
                  <Link to="/contact" >Jumia Return policy</Link>
                  </DivItem4>
                  <DivItem5>
                  <Link to="/contact"  >Digital service</Link>
                  </DivItem5>
                  <DivItem6>
                  <Link to="/contact"  >Bulk purchase</Link>
                  </DivItem6>

               </FooterItems>
      </FooterContentInfo3>
      <FooterContentInfo4>
             <FooterTitle>
              <span>More Info</span>
             </FooterTitle>
             <FooterItems>
                  <DivItem1>
                  <Link to="/contact" >Site map</Link>
                  </DivItem1>
                  <DivItem2>
                  <Link to="/contact" >Track my order</Link>
                  </DivItem2>
                  <DivItem3>
                  <Link to="/contact" >Pivacy policy</Link>
                  </DivItem3>

                  <DivItem4>
                  <Link to="/contact" >Authenticate Items policy</Link>
                  </DivItem4>
                  

               </FooterItems>
      </FooterContentInfo4>
      <FooterContentInfo5>
             <FooterTitleDiv>
              <span>Download and connect with us</span>
               <DownloadOnDiv>
                   <DownLoadWithApple>
                       <AppleInfo>
                         <AiOutlineApple style={{fontSize:"12px"}}/> 
                        <Text>
                        <p>Download on</p>
                        <h4>Apple store</h4>
                       </Text> 
                       </AppleInfo>
                       <GoogleInfo>
                         <AiOutlineGoogle style={{fontSize:"12px"}}/>
                       <Text>
                        <p>Download on</p>
                        <h4>Apple store</h4>
                       </Text> 
                       </GoogleInfo>
                      
                   </DownLoadWithApple>
               </DownloadOnDiv>
             </FooterTitleDiv>
             {/* <FooterItems>
                  
                  

               </FooterItems> */}
      </FooterContentInfo5>
      </FooterContainer>
    </FooterWrapper>
    </Foota>
  )
}

export default Footer

const Foota = styled.div`
width:100%;
height:200px;
background-color:white;
`
const FooterTopWrapper = styled.div`
width:100%;
height:70px;
background-color:purple;
display:flex;
justify-content:center;
align-items:center;
`
const FooterTopWrapperContent=styled.div`
width:80%;
height:60px;
background-color:white;
display:flex;
align-items:center;

`
const FooterTopWrapperContentDiv=styled.div`
width:100%;
height:50px;
background-color:red;
display:flex;
align-items:center;
`
const MesaageDiv=styled.div`
width:20%;
height:35px;
margin-left:30px;
background-color:yellow;
display:flex;
justify-content:flex-start;
`
const MessageText =styled.div`
width:100px;
height50px;
background-color:green;
margin-left:5px;
span{
  font-size:12px;
  color:white;
}
p{
  margin-top:3px;
  font-size:12px;
  color:white;
}
`
const MessageLogo =styled.div`
width:30px;
height:30px;
background-color:white;
border-radius:50%;
display;flex;
align-items:center;
margin:2px;
`
const EmailInput = styled.label`
width:60%;
margin-left:5px;
border-radius:2px;
background-color:white;
padding:7px 20px;
border:1px solid grey;
display;flex;
align-items:center;
justify-content:space-between;
input{
  width:60%;
  height:20px;
  border:none;
  outline:none;
  background:blue;
  
}
button{
  width:30%;
  font-size:12px;
  margin-left:16px;
}

`
const FooterWrapper = styled.div`
width:100%;
height:auto;
background-color:blue;
display:flex;
justify-content:center;
`
const FooterContainer = styled.div`
width:80%;
height:auto;
background-color:red;
 display:flex;
 margin-left:50px;

`
const FooterContentInfo1 = styled.div`
width:15%;
height:200px;
background-color:green;
`
const FooterContentInfo2 = styled.div`
width:10%;
height:200px;
background-color:green;
margin-left:20px;
`
const FooterContentInfo3 = styled.div`
width:18%;
height:200px;
background-color:green;
margin-left:20px;
`
const FooterContentInfo4 = styled.div`
width:10%;
height:200px;
background-color:green;
margin-left:20px;
`
const FooterContentInfo5 = styled.div`
width:10%;
height:200px;
background-color:green;
margin-left:20px;
`


const FooterTitle = styled.div`
width:100%;
height:20px;
font-size:14px;
background-color:cyan;
display:flex;



`

const FooterItems = styled.div`
width:100%;
height:160px;
margin-top:20px;
background-color:black;
display:flex;
flex-direction:column;
font-size:12px;

list-style:none;


`
const DivItem1 = styled.li`
width:100%;
a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }




`
const DivItem2 = styled.li`
width:100%;

a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }


`
const DivItem3 = styled.li`
width:100%;
text-decoration:none;
background-color:darkgreen;
a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }
`
const DivItem4 = styled.li`
width:100%;
text-decoration:none;
background-color:navy;
a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }
`
const DivItem5 = styled.li`
width:100%;
text-decoration:none;
background-color:blue;
a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }
`
const DivItem6 =styled.li`
width:100%;
text-decoration:none;
background-color:blue;
a{
  color:white;
  text-decoration:none;
  &:hover{
    color:black;
  }
`
const DownloadOnDiv = styled.div`
width:100%;
height:80px;
background-color:yellow;
display:flex;
justify-content:center;
align-items:center;
`
const DownLoadWithApple = styled.div`
width:100%;
color:white;
height:50px;
background-color:lightyellow;
display:flex;
justify-content:space-between;
align-items:center;
`
const Text = styled.div`
width:70px;
font-size:12px;
margin-left:20px;
color:black;
background-color:Navy;
`
const FooterTitleDiv= styled.div`
width:300%;

background-color:Navy;
span{
  color:white;
}
`
const AppleInfo = styled.div`
width:40%;
height:25px;
background:red;
display:flex;
justify-content:center;
margin-top:-29px;
`
const GoogleInfo = styled.div`
width:30%;
height:25px;
background:pink;
`
