import styled from 'styled-components'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from '@fortawesome/fontawesome'
import { faCaretDown  } from '@fortawesome/free-solid-svg-icons';
// import {ViewMore} from "../components/ViewMore"



// fav-brand 와 popular-brand를 넣어줄 컴포넌트
const Brand = () => {
    const products = function product (){
        return (
            <ProductDiv>
                <ProductImage/>
                <ProductInfo>
                    <ProductName>Nike</ProductName>
                    <ProductContent>super joden limited</ProductContent>
                    <ProductPrice>320,000원</ProductPrice>
                    <Productnow>즉시 구매가</Productnow>
                </ProductInfo>
            </ProductDiv>
     )
    }
 return (
    <BrandContainer>
    <Top>
        <Area>
            <FavDiv>Preferred
                <FavDivBottom>
                    선호 등록 상품
                </FavDivBottom>
            </FavDiv>
        </Area>
        <Div>
           {products()}
           {products()}
           {products()}
           {products()}
        </Div>
    </Top>
    <Morebtn>더보기<FontAwesomeIcon icon={faCaretDown} className='more'/></Morebtn>
   
    <Bottom>
        <Area>
            <PopularDiv>Popular
            <PopularDivBottom>
                    인기 등록 상품
                </PopularDivBottom>
            </PopularDiv>
        </Area>
        <Div>
           {products()}
           {products()}
           {products()}
           {products()}
        </Div>
    </Bottom>
    <Morebtn>더보기<FontAwesomeIcon icon={faCaretDown} className='more'/></Morebtn>
    </BrandContainer>
    
 )
}
//<FontAwesomeIcon icon="fa-solid fa-caret-down" />
// const = styled.``
const BrandContainer = styled.div`
  position: relative;
  /* padding:28px ; */
  display: grid;
  place-items: center;
  width: 100%;
  height: 1200px;
  /* margin-top: 50px; */
  background-color: white;
`
//Top, Area, FavDiv, Product_Image, Product_info, Product_name, Product_content, Product_price
// up 
const Top = styled.div`
width: 90%;
height: 500px;
/* border: 1px solid black; */

`
// 좋아하는 브랜드
const FavDiv = styled.div`
font-weight: 700 ;
margin-left:12vw ;
width: 200px;
height: 80px;
font-size: 20px ;
/* border: 1px solid black; */

`
const FavDivBottom = styled.div`
color: #999999 ;
width: 185px;
height: 50px;
font-size: 12px ;
/* border: 1px solid black; */

`


// 공통
const Area = styled.div`
width: 50%;
height: 60px ;
/* border: 1px solid black; */

`
const Div = styled.div`
/* position: flex; */
/* border: 1px solid black; */
/* place-items: center; */
justify-content: center;
display:flex ;
width: 100%;
height: 380px;
`
const ProductDiv = styled.div`
/* border: 1px solid black; */
/* position: flex; */

display:inline-block ;
margin: 0.7em;
width: 14vw;
height: 14vh;
`
const ProductInfo = styled.div`
margin-top:0.3em ;
/* border: 1px solid black; */
width: 100%;
height: 100px;
`
const ProductImage = styled.div`
border-radius: 3% ;
border: 1px solid whitesmoke;
width: 100%;
height: 250px;
`
const ProductName = styled.div`
/* border: 1px solid black; */
text-align: start;
width: 100%;
height: 25px;
`
const ProductContent = styled.div`
/* border: 1px solid black; */
text-align: start;
font-weight:350;
font-size:14px ;
width: 100%;
height: 30px;
`
const ProductPrice = styled.div`
/* border: 1px solid black; */
text-align: start;
font-weight:border;
font-size: 16px;
width: 100%;
height: 20px;
margin: 0;
`
// 즉시구매
const Productnow = styled.div`
margin: 0;
color: #bcbcbc ;
text-align: start;
font-size:0.5em ;
`
//더보기
const Morebtn = styled.div`
/* border: 1px solid black; */
/* margin-top:20px ; */
line-height: 50px;
border-radius: 12px ;
padding:0 30;
border: 1px solid #bcbcbc ;
text-align:center ;
font-size:1em ;
font-weight: 400 ;
width: 6vw;
height: 5vh;
color:#444444 ;
cursor: pointer;
`
// font-awesome



// down
const Bottom = styled.div`
/* border: 1px solid black; */
width: 90%;
height: 500px;
`
// 인기 브랜드
const PopularDiv = styled.div`
/* border: 1px solid black; */
font-weight: 700 ;
margin-left:11.5vw ;
width: 200px;
height: 80px;
font-size: 20px ;
`
const PopularDivBottom = styled.div`
color: #999999 ;
margin-left:0.3vw ;
width: 188px;
height: 50px;
font-size: 12px ;
/* border: 1px solid black; */

`



// 랜딩 페이지
const Landing = () => {
    return (
        <LandingDiv>
        <LandingTop>
            <Header/>
        </LandingTop>
        <LandingMiddle>
            <Brand/>
        </LandingMiddle>
        <LandingBottom>
            <Footer/>
        </LandingBottom>
        </LandingDiv>
    )
    
    
} 

const LandingDiv = styled.div`
    /* border: 1px solid black; */
    /* margin:0;
    padding:0; */
`
const LandingTop = styled.div`
    /* border: 1px solid black; */

    width: 100%;
    height: 200px;
    /* background-color: blue ; */
`
const LandingMiddle = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1200px;
`
const LandingBottom = styled.div`
    width: 100%;
    /* height: 1000px; */
    /* background-color: grey ; */
`
export default Landing;