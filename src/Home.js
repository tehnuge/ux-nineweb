import React, {useState, useEffect} from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';
import styled, {keyframes} from 'styled-components'

const imgBg = "bg.jpg"

const ImgDiv = styled.div`
background-image: url(${imgBg});
height: 550px;
position: static;
left: 3.35%;
right: 3.35%;
top: 3.32%;
bottom: 23.27%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
align-self:center;
flex-grow: 2;`

const PaddingDiv = styled.div`
padding:120px;
color:white;`

const FIO = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`

const FI = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: .9;
}`

const Fade = styled.div`
  animation: ${props => props.out ? FIO : FI} 1s linear;
  transition: visibility 1s linear;
`;

const Home = props => {

  const bannerList = ['Product', 'Website', 'Tool', 'Interface']
  const [bannerWords, setBannerWords] = useState('Tool')
  const [i, setI] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (i  === 4 ){
        setI(0)
        setBannerWords(bannerList[0])
      }else{
        setI(i+1)
        setBannerWords(bannerList[i])
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [i, bannerList]);

  return (
    <div className="container-fluid">
      <div className="row hero d-flex align-items-center justify-content-between">
        <ImgDiv>
        <PaddingDiv>
          <h1>Wondering if your new 
            <Fade out={i % 2 === 0}> {bannerWords} </Fade>
        will succeed?</h1>
        <br/>
          <Button variant="primary" href="/Contact">Learn More</Button>
          </PaddingDiv>
        </ImgDiv>
      </div>
      <br />
      <h2 className="d-flex justify-content-center">How it Works</h2>
      <div className="cards d-flex justify-content-between ">
        {props.cards.map(card =>
          <Card card={card} key={card.name} />
        )}
      </div>
    </div>
  )
}

export default Home;