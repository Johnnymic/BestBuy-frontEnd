import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrapper>
       <FooterContainer>
          <FooterContent>

          </FooterContent>



       </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
width:100%;
height:350px;
background-color:blue;
display:flex;
justify-content:center;
align-items:center;
`
const FooterContainer = styled.div`
width:80%;
height:300px;
background-color:red;
display:flex;
margin:50px;
align-items:center;
`
const FooterContent = styled.div`
width:20%;
height:100px;
background-color:white;

`

