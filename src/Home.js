import React, { useState, useEffect } from 'react';
import Card from './Card';
import{Button, ImgDiv, PaddingDiv, Fade, BottomDiv} from './HomeStyle';

const Home = props => {

  const bannerList = ['Product', 'Website', 'Tool', 'Interface']
  const [bannerWords, setBannerWords] = useState('Tool')
  const [i, setI] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (i === 4) {
        setI(0)
      } else {
        setI(i + 1)
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
            <br />
            <Button href="/Contact">Learn More</Button>
          </PaddingDiv>
        </ImgDiv>
      </div>
      <br />
      <BottomDiv>
        <h2 className="d-flex justify-content-center">How it Works</h2>
        <div className="cards d-flex justify-content-between ">
          {props.cards.map(card =>
            <Card card={card} key={card.name} />
          )}
        </div>
      </BottomDiv>
    </div>
  )
}

export default Home;