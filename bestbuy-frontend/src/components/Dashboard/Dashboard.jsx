import React from 'react'
import styled from 'styled-components'
import pic from '../Dashboard/pixel.jpg'

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
                        <Content9>
                        <span>logo</span>
                            <p>Gaming </p>

                        </Content9>
                        <Content10>
                        <span>logo</span>
                            <p>Gaming </p>

                        </Content10>



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
            <DashboardLayer2box>
            <Box1>
                <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
               
            </Box1>
            <Box2>
            <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
            </Box2>
            <Box3>
            <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
            </Box3>
            <Box4>
            <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
            </Box4>
            <Box5>
            <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
            </Box5>
            <Box6>
            <BoxContent>
                    <BoxContentImage>
                    <img src={pic} />
                    </BoxContentImage>
                    <BoxContentText>
                    <p>name</p>
                    </BoxContentText>
             
            
                </BoxContent>
            </Box6>
            
           
        </DashboardLayer2box>
        </DashboardLayer2>

         <DashboardLayer3>
                <DashboardLayer3Content>
                     <Nivea>
                       <P>Nivea Office Store Deal</P> 

                       <SelectAll>
                        {/* <span>SEE ALL</span> */}
          
                       </SelectAll>
                     </Nivea>
                

                </DashboardLayer3Content>
                <DashboardLayer3ban>

                </DashboardLayer3ban>
             
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
height:260vh;
background-color:orange;
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
height:300px;
 background-color:white;
display:flex;
justify-content:space-between;

`
const DashboardLayer2 =styled.div`
width:100%;
height:320px;
// background-color:brown;
display:flex;
justify-content:center;
align-items:center;
`
const DashboardLayer3 =styled.div`
width:100%;
height:200px;
margin-top:20px;
// background-color:purple;
`
const DashboardLayer4 =styled.div`
width:60%;
height:400px;
// background-color:green;
`
const DashboardLayer1Content1 =styled.div`
width:25%;
height:300px;
// background-color:yellow;
display:flex;
justify-content:center;
align-items:center;

`
const DashboardLayer1Content2 =styled.div`
width:50%;
height:300px;
background-color:black;
`
const DashboardLayer1Content3 =styled.div`
width:22%;
height:300px;
background-color:blue;
`
const DashboardLayer1Content3Box1 =styled.div`
width:100%;
height:140px;
background-color:Navy;
margin-bottom:20px;
`
const DashboardLayer1Content3Box2 =styled.div`
width:100%;
height:140px;
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
const Content9 = styled.div`
width:100%;
height:30px;
background-color:lightgray;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`
const Content10 = styled.div`
width:100%;
height:20px;
background-color:lightgreen;
display:flex;
color:white;
justify-content:space-between;
align-items:center;
`


const ContentDiv = styled.div`
width:80%;
height:100%;
background-color:green;
`
const Box1 = styled.div`
  width: 30%;
  height: 150px;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  transition: box-shadow 0.3s;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
    background-color:gray;
  }
`;

const Box2 = styled.div`
width:30%;
height:150px;
margin-right:10px;
background-color:cyan;
border: 1px solid #ccc;
transition: box-shadow 0.3s;
display:flex;
  justify-content:center;
  align-items:center;

&:hover {
  box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
  background-color:gray;
}
`
const Box3 = styled.div`
width:30%;
height:150px;
margin-right:10px;
background-color:gray;
border: 1px solid #ccc;
transition: box-shadow 0.3s;
display:flex;
  justify-content:center;
  align-items:center;

&:hover {
  box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
  background-color:gray;
}
`
const Box4 = styled.div`
width:30%;
height:150px;
margin-right:10px;
background-color:Navy;
border: 1px solid #ccc;
transition: box-shadow 0.3s;
display:flex;
  justify-content:center;
  align-items:center;

&:hover {
  box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
  background-color:gray;
}
`
const Box5 = styled.div`
width:30%;
height:150px;
margin-right:10px;
background-color:orange;
border: 1px solid #ccc;
transition: box-shadow 0.3s;
display:flex;
  justify-content:center;
  align-items:center;



&:hover {
  box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
  background-color:gray;
}
`
const Box6 = styled.div`
width:30%;
height:150px;
margin-right:10px;
background-color:yellow;
border: 1px solid #ccc;
transition: box-shadow 0.3s;
display:flex;
  justify-content:center;
  align-items:center;

&:hover {
  box-shadow: 0 10 33px rgba(33, 33, 33, 0.2);
  background-color:gray;
}
`
const Box7 = styled.div`
width:30%;
height:150px;
margin-right:5px;
background-color:cyan;
`
const Box8 = styled.div`
width:20%;
height:100px;
margin-right:5px;
background-color:Navy;
`


const DashboardLayer2box= styled.div`
width:100%;
display:flex;

flex-wrap:wrap;
height:100%;
background-color:green;
`
const BoxContent = styled.div`
width:90%;
height:120px;



`
const BoxContentImage= styled.div`
width:100%;
height:80px;
background:orange;
img{
    width:100%;
    height:120%;
}

`
const BoxContentText= styled.div`
width:100%;
height:20px;
background:#ffff;
p{
    text-align:center;
    
}

`
const DashboardLayer3Content = styled.div`
width:100%;
height:50px;
background:blue;
`
const DashboardLayer3ban = styled.div`
width:100%;
height:30vh;
background:green;
`
const Nivea =styled.div`
background:cyan;
display;flex;
justify-content:space-between;

`
const SelectAll = styled.div`
width:50%;
height:20px;
background:brown;
`
const P = styled.div`
width:30%;
height:20px;
background:white;
`


 







