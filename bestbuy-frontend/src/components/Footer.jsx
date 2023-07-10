import React from 'react'
import styled from 'styled-components'
import {TbMailFilled} from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (

    <Foota>
      <FooterTopWrapper>
        <FooterTopWrapperContent>
           <FooterTopWrapperContentDiv>
                      <MesaageDiv>
                          <MessageLogo >
                          <TbMailFilled style={{margin: "11px", fontSize:"15px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>   
                     < MesaageDiv>
                          <MessageLogo >
                          <TbMailFilled style={{margin: "11px", fontSize:"15px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>
                      <MesaageDiv>
                          <MessageLogo >
                          <TbMailFilled style={{margin: "11px", fontSize:"15px"}} /> 
                          </MessageLogo>
                           <MessageText>
                            <span>Email Support</span>
                            <p>help@Jumia</p>
                      </MessageText>
                      </MesaageDiv>
                     <EmailInput>
                        <input type="text" placeholder='Enter your email' name="" id="" />
                        <button>uuu</button>
                     </EmailInput>

           </FooterTopWrapperContentDiv>
            
        </FooterTopWrapperContent>
          
     </FooterTopWrapper>
    <FooterWrapper>
       
       <FooterContainer>
           <FooterContentDiv>
               <FooterJumia>

               </FooterJumia>
           </FooterContentDiv>

          <FooterContentInfo>
             
          </FooterContentInfo>
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
height:40px;
margin-left:30px;
background-color:yellow;
display:flex;
justify-content:flex-start;


`
const MessageText =styled.div`
width:100px;
height100px;
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
width:40px;
height:40px;
background-color:white;
border-radius:50%;
display;flex;
align-items:center;
`
const EmailInput = styled.label`
width:70%;
height300px;
border-radius:5px;
background-color:white;
border:1px solid grey;
display;flex;
align-items:center;
justify-content:space-between;
input{
  width:81%;
  border:none;
  outline:none;
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
// display:flex;
margin:50px;
// align-items:center;
`
const FooterContentDiv = styled.div`
width:100%;
height:100px;
background-color:black;

display:flex;
justify-content:center;
align-items:center;

`
const FooterContentInfo = styled.div`
width:100%;
height:200px;
background-color:pink;

`
const FooterJumia = styled.div`
width:100%;
height:50px;
background-color:cyan;

`

