import React from 'react'
import {MdKeyboardArrowDown, MdOutlineLocalGroceryStore, MdSearch} from 'react-icons/md'
import {VscAccount} from 'react-icons/vsc'
import { BiHelpCircle} from 'react-icons/bi'
import styled from "styled-components"

function Header() {
  return (
    <HeaderWrapper>
        <HeaderContent>

            <HeaderLogo>
                 <span>Jumia</span>
            </HeaderLogo>
            

            <HeaderInput>
                <HeaderInputLogo>
                    <MdSearch style={{fontSize:"20px",color:"#a3a3a6"}}/>
                    <Input type='text' placeholder='Search product, brands, categor...'>
                    </Input>
                </HeaderInputLogo>  
                    <Button>
                      SEARCH
                    </Button>
                </HeaderInput>

            <HeaderDetails>
                 <HeaderAccountInfo>
                 <VscAccount style={{fontSize:"20px",fontWeight:"500"}}/>
                 <span>Account</span>
                 <MdKeyboardArrowDown   style={{fontSize:"20px",fontWeight:"300"}}/>

                 </HeaderAccountInfo>

                 <HeaderHelper>

                   <BiHelpCircle style={{fontSize:"20px",fontWeight:"500"}}/>
                   <span>Help</span>
                   <MdKeyboardArrowDown   style={{fontSize:"20px",fontWeight:"500"}}/>

                 </HeaderHelper>

                 <HeaderLogoCart>
                    <span>Cart</span>
                     <MdOutlineLocalGroceryStore style={{fontSize:"20px",fontWeight:"200",color:"orange"}}/>
                     <CartCount><p>0</p></CartCount>
                 </HeaderLogoCart>

            </HeaderDetails>

      
        </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  width:100%;
  height:100px;
  // background-color:blue;
  display:flex;
  justify-content:center;
  align-items:center;
`
const HeaderContent = styled.div`
  width:80%;
   height:30px;
display:flex;
  justify-content:space-between;
  align-items:center;

`
const HeaderLogo = styled.div`
width:20%;
height:20px;
// background-color:green;
span{

  font-size:25px;
  font-weight:600;
}

`
const HeaderInput =styled.div`
width:80%;
height:30px;
// background-color:white;
display:flex;
justify-content:space-between;

`


const Input =styled.input`
width:100%;
border:none;
border-radius:2px;
outline:none;
font-size:13px;
font-weight:400;
color:#a3a3a6;
`

const Button=styled.button`
width:18%;
text-align:center;
margin-right:10px;
padding:10px 0px;
color:white;
border:1px solid #a3a3a6;
border-radius:2px;
background-color: rgb(255, 153, 0);
font-size:8px;
font-weight:300px;
&:hover{
  background-color:orange;
}

`
const HeaderInputLogo=styled.label`
width:75%;
// background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
border:1px solid #a3a3a6;
border-radius:5px;

`
const HeaderDetails=styled.div`
width:30%;
height:30px;
// background-color:pink;
display:flex;
justify-content:space-between;
align-items:center;

`


const HeaderAccountInfo=styled.button`
width:37%;
height:30px;
// background-color:purple;
display:flex;
border:none;
justify-content:space-between;
align-items:center;
outline:none;

font-size:10px;
font-weight:400;
padding:10px;
&:hover{
  color:orange;
}

span{
 
  margin:3px;

}
`
const HeaderHelper=styled.button`
width:30%;
height:30px;
// background-color:yellow;
display:flex;
margin-left:10px;
border:none;

justify-content:space-between;
align-items:center;
font-size:10px;
font-weight:400;
padding:10px;
&:hover{
color:orange;
}

span{

  margin:3px;
}

`
const HeaderLogoCart=styled.div`
width:30%;
height:30px;
// background-color:brown;
display:flex;
justify-content:center;
align-items:center;
font-size:10px;
font-weight:400;
padding:10px;
&:hover{
  color:orange;
  }
span{
  
  margin:3px;
}

`
const CartCount=styled.div`
width:10%;
height:20px;
margin-top:-30px;
margin-left:-3px;

p{
  color:lightgray;
  font-size:11px;
  font-weight:200;
}
`



