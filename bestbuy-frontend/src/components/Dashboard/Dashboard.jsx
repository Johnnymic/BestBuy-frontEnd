import React from 'react'
import styled from 'styled-components'

function Dashboard() {
  return (
  <DashboardContainer>
      <DashboardWrapper>
         <DashboardLayer1>

             <DashboardLayer1Content1>
               <ContentDiv>
            
                        <Content1>
                            <span>logo</span>
                            <p>SuperMarket</p>

                        </Content1>
                        <Content2>
                        <span>logo</span>
                        <p>Applicance</p>
                        </Content2>
                        <Content3>
                        <span>logo</span>
                            <p>Beauty</p>
                        </Content3>
                        <Content4>
                        <span>logo</span>
                            <p>Fashion</p>
                        </Content4>
                        

                        <Content5>
                        <span>logo</span>
                            <p>Clothing</p>

                        </Content5>
                        <Content6>
                        <span>logo</span>
                            <p>Baby ware</p>

                        </Content6>
                        <Content7>
                        <span>logo</span>
                            <p>Office</p>

                        </Content7>
                        <Content8>
                        <span>logo</span>
                            <p>Gaming </p>

                        </Content8>

                </ContentDiv> 

           


            
            </DashboardLayer1Content1> 
            <DashboardLayer1Content2>
                  
            </DashboardLayer1Content2>  
            <DashboardLayer1Content3>

                <DashboardLayer1Content3Box1>
                    box1
                </DashboardLayer1Content3Box1> 


                <DashboardLayer1Content3Box2>
                    box2
                </DashboardLayer1Content3Box2> 


            </DashboardLayer1Content3>  

         </DashboardLayer1>
         <DashboardLayer2>

         </DashboardLayer2>
         <DashboardLayer3>

         </DashboardLayer3>

         <DashboardLayer4>

         </DashboardLayer4>

         

        </DashboardWrapper>
 </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer=styled.div`
width:100%;
height:300vh;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
`
const DashboardWrapper = styled.div`
width:80%;
height:250vh;
background-color:orange;
justify-content:center;




`
const DashboardLayer1 =styled.div`
width:100%;
height:400px;
background-color:white;
display:flex;
justify-content:space-between;

`
const DashboardLayer2 =styled.div`
width:60%;
height:400px;
background-color:brown;
`
const DashboardLayer3 =styled.div`
width:60%;
height:400px;
background-color:purple;
`
const DashboardLayer4 =styled.div`
width:60%;
height:400px;
background-color:green;
`
const DashboardLayer1Content1 =styled.div`
width:25%;
height:400px;
background-color:yellow;
display:flex;
justify-content:center;
align-items:center;

`
const DashboardLayer1Content2 =styled.div`
width:50%;
height:400px;
background-color:black;
`
const DashboardLayer1Content3 =styled.div`
width:22%;
height:400px;
background-color:blue;
`
const DashboardLayer1Content3Box1 =styled.div`
width:100%;
height:190px;
background-color:Navy;
margin-bottom:20px;
`
const DashboardLayer1Content3Box2 =styled.div`
width:100%;
height:190px;
background-color:cyan;
`
const Content1 = styled.div`
width:100%;
height:30px;
background-color:black;
display:flex;
color:white;
justify-content:space-between;
align-items:center;


`

const Content2 = styled.div`
width:100%;
height:30px;
background-color:Navy;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`
const Content3 = styled.div`
width:100%;
height:30px;
background-color:orange;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`
const Content4 = styled.div`
width:100%;
height:30px;
background-color:brown;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`
const Content5 = styled.div`
width:100%;
height:30px;
background-color:gray;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`

const Content6 = styled.div`
width:100%;
height:30px;
background-color:Navy;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`
const Content7 = styled.div`
width:100%;
height:40px;
background-color:white;
display:flex;
color:black;
justify-content:space-between;
align-items:center;
`
const Content8 = styled.div`
width:100%;
height:30px;
background-color:cyan;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`

const ContentDiv = styled.div`
width:90%;
height:100%;
background-color:green;
`







