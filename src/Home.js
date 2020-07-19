import React from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';


const Home = props => {
  return (
    <div className="container">
      <div className="hero d-flex align-items-center justify-content-between">
        <div>
          <h1>Wondering if your new <div className="special">product </div>
        will succeed?</h1>
        <br/>
          <Button variant="primary" href="/Contact">Learn More</Button>
        </div>



        <img data-aos="fade-left" src={props.imgBg} alt="server" className="img-fluid main-image" />
      </div>
      <br />
      <h2 className="d-flex justify-content-center">How it Works</h2>
      <div className="cards d-flex justify-content-between ">
        {props.cards.map(card =>
          <Card card={card} />
        )}
      </div>
    </div>
  )
}

export default Home;