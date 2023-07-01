import React from 'react'
import {MdSearch} from 'react-icons/md'
import styled from "styled-components"

function Header() {
  return (
    <HeaderWrapper>
        <HeaderContent>

            <HeaderLogo>
                 <p>logo</p>
            </HeaderLogo>
            

            <HeaderInput>
                <HeaderInputLogo>
                    <MdSearch style={{fontSize:"30px",color:"#a3a3a6"}}/>
                    <Input type='text' placeholder='Search product, brands, categor...'>
                    </Input>
                </HeaderInputLogo>  
                    <Button>
                      SEARCH
                    </Button>
                </HeaderInput>

            <HeaderDetails>
                 <HeaderAccountInfo>
                  uuuuuu
                 </HeaderAccountInfo>

                 <HeaderHelper>
                   hhhhhh 
                 </HeaderHelper>

                 <HeaderLogoCart>
                  hhh
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
  background-color:blue;
  display:flex;
  justify-content:center;
  align-items:center;
`
const HeaderContent = styled.div`
  width:80%;
   height:60px;
  background-color:red;

  display:flex;
  justify-content:space-between;
  align-items:center;

`
const HeaderLogo = styled.div`
width:20%;
height:40px;
background-color:green;


`
const HeaderInput =styled.div`
width:48%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;

`


const Input =styled.input`
width:100%;
border:none;
border-radius:2px;
outline:none;
`

const Button=styled.button`
width:30%;
text-align:center;
color:white;
border:1px solid #a3a3a6;
border-radius:3px;
background-color:blue;
`
const HeaderInputLogo=styled.label`
width:60%;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
border:1px solid #a3a3a6;
border-radius:5px;
`
const HeaderDetails=styled.div`
width:30%;
height:40px;
background-color:pink;
display:flex;
justify-content:space-between;
align-items:center;

`


const HeaderAccountInfo=styled.div`
width:30%;
background-color:purple;
`
const HeaderHelper=styled.div`
width:30%;
background-color:yellow;
`
const HeaderLogoCart=styled.div`
width:30%;
background-color:brown;
`



