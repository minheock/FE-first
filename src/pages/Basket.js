import React,{ useState } from 'react';
import styled from 'styled-components'
import Footer from "../components/Footer";
import Header from '../components/Header';

// 스테이트로 카운터해서 값이 추가될때마다 카운트가 올라가고 삭제하면 하나 삭제할때마다
// 관심상품
function Basket() {

    const CheckBox = function Checks () {
        const [isOn, setisOn] = useState(false);
        const CheckHandler = () => {
          setisOn(!isOn)
        }

        // if(isOn === true){
        //     return true;
        // }
        return (
         <Check><Checking onClick={CheckHandler} className={isOn === true ? 'checked' : '' }/>
         </Check>
        ) 
     }
    
    const BasketBodyContent = function BBC() {
        return (
            <BodyDiv>
                <BodyDivCheck>{CheckBox()}{console.log('--------',CheckBox() )}</BodyDivCheck>
                <BodyDivImg></BodyDivImg>
                <BodyDivContent>
                    <ContentName>Nike</ContentName>
                    <ContentSize>265</ContentSize>
                    <ContentGrade>S</ContentGrade>
                </BodyDivContent>
                <BodyDivPrice>70000 won</BodyDivPrice>
            </BodyDiv>
        )
    }

    
    


    return (
        <Div>
            <BasketTop>
                <Header/>
            </BasketTop>
            <BasketMiddle>
                <BasketTitle>
                    <TitleDiv>관심 상품</TitleDiv>
                    <TitleSelect>
                        <Box>{CheckBox()}</Box>
                        <SelectAll>전체 선택</SelectAll>
                        <Box>{CheckBox()}</Box>
                        <SelectDelete>선택 삭제</SelectDelete>
                    </TitleSelect>
                </BasketTitle>
                <BasketBody>
                    {BasketBodyContent()}
                    {BasketBodyContent()}
                    {BasketBodyContent()}
                </BasketBody>
                <BasketSum>
                    <SumDiv>

                    </SumDiv>
                </BasketSum>
            </BasketMiddle>
            <BasketBottom>
                <Footer />
            </BasketBottom>
        </Div>
    )
}




// css
const Div = styled.div`
margin:0 ;
padding:0 ;
`

//상단
const BasketTop = styled.div`
/* height: 150px ;
border: 1px solid blue; */
`
//중단
const BasketMiddle = styled.div`
height: 60vh ;
/* border: 1px solid black; */
margin-top: 2em;
/* display: flex; */
`
const BasketTitle = styled.div`
/* border: 1px solid black; */
height: 7em ;
/* margin: 1em; */
`
const TitleDiv = styled.div`
border-bottom: 2px solid darkgray;
margin-left: 20vw;
margin-top: 10px;
margin-bottom: 10px;
/* padding-left: 1.5em ;
padding-top: 1.5em ; */
height: 1.5em;
width: 52vw ;
font-size: 1.5em ;
`
const TitleSelect = styled.div`
/* border: 1px solid black; */
display:flex ;
height: 3em;
margin-left: 19vw;
text-align: center;
vertical-align: center;
`
const SelectAll = styled.div`
/* border: 1px solid black; */
margin-top: 14px;
margin-left: 10px;
height: 1.5em;
font-size: 13px;
/* width: 5em; */
`
const SelectDelete = styled.div`
/* border: 1px solid black; */
margin-top: 14px;
margin-left: 10px;
height: 1.5em;
font-size: 13px;
`
const Box = styled.div`
margin-top: 14px;
margin-left: 15px;
`
// 체크박스
const Check = styled.div`
    /* position: absolute; */
    place-items: center;
    vertical-align: center;
    text-align: center ;
    position:center ;
    border-radius: 100%;
    border: 1px solid black;
    height:15px ;
    width:15px ;
`
const Checking = styled.div`
/* position: absolute; */
/* margin-left: 1px ; */
margin: 1.05px;
position:center ;
border-radius: 100%;
border: 2px solid darkgray;
height:9px ;
width:9px ;
cursor: pointer;
&.checked {
      background-color:black;
    }
`

const BasketBody = styled.div`//Div의 부모
margin-top: 1em;
/* border: 1px solid black; */
height: 40vh;
/* align-items: center;
justify-content: center;
text-align: center; */
overflow:auto;
`
const BodyDiv = styled.div`// Body의 자식
margin-left: 20.2vw;
/* display: inline-block ; */
border-bottom: 1px solid #bcbcbc;
display:flex ;
height: 20vh;
width: 1000px ;
place-items: center;
/* align-items: center; */
/* flex-direction:column; */
`
const BodyDivCheck = styled.div`
margin-left:1.5vw;
height: 1em;
/* border: 1px solid black; */
width: 1.2vw; 
`
const BodyDivImg = styled.div`
height: 8em;
border: 1px solid grey;
border-radius: 6%;
width: 8vw; 
margin-left:1.5vw;
`
const BodyDivContent = styled.div`
display:inline ;
/* vertical-align: center; */
/* border: 1px solid black; */
/* border-radius: 10%; */
height: 8em;
width: 25%; 
text-align:start;
padding-top: 5px ;
margin-left:2.5vw;
`
const ContentName = styled.p`
/* border: 1px solid black; */
/* margin-top: 1px; */
margin:0.3em ;
border-bottom: 1px solid #bcbcbc;
vertical-align:center;
height: 2em ;
`
const ContentSize = styled.p`
margin:0.3em ;
border-bottom: 1px solid #bcbcbc;
/* border: 1px solid black; */
vertical-align:center;
height: 2em ;
`
const ContentGrade = styled.p`
margin:0.3em ;
border-bottom: 1px solid #bcbcbc;
/* border: 1px solid black; */
vertical-align:center;
height: 2em ;
`
const BodyDivPrice = styled.p`
display:inline ;
margin-left:1.5vw;
margin-top: 6.5em;
border-bottom: 1px solid #bcbcbc;
/* border: 1px solid black; */
height: 1em;
width: 25%; 
vertical-align:center;
text-align: center;
flex-direction:column;
`
const BasketSum = styled.div`
height:4em;
width:100% ;

justify-items:center ;
/* place-items:center; */
text-align: center;

`
const SumDiv = styled.div`
border-radius: 6% ;
margin-top: 2em;
margin-left:60vh ;
color:white ;
background-color:#222222;
display:inline-block;
width: 25vh;
height: 8vh ;
cursor: pointer;
/* flex-direction:column; */
/* border: 1px solid black; */

`
//하단
const BasketBottom = styled.div``


export default Basket;