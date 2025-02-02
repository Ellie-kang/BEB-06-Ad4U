import React from 'react';
import About from './component/About';
import Home from './component/Home';
import Ad from './component/Ad';
import BusinessPartner from './component/BusinessPartner';

import { Col, Row, Container, Button } from 'react-bootstrap';
import smoothscroll from 'smoothscroll-polyfill';
import { IoIosArrowDropupCircle } from "react-icons/io";

import './Main.css';

// scrollTo 메서드를 사용 할 때, behavior 속성을 smooth로 설정 할 경우, 스크롤 이동시 부드럽게 이동하는 효과 
smoothscroll.polyfill();

const Main = ( userData ) => {
  const topClick = () => {
    window.scrollTo(0, 0, { behavior : "smooth" })
  }
  const onHomeClick = () => {
    window.scrollTo(0, 0, { behavior : "smooth" })
      };
  const onAboutClick = () => {
    window.scrollTo(0, 700, { behavior : "smooth" })
      };
  const onAdClick = () => {
    window.scrollTo(0, 1550, { behavior : "smooth" })
      };
  const onCreatorClick = () => {
    window.scrollTo(0, 2300, { behavior : "smooth" })
      };
      console.log(userData)

  return (
    <Container className='main_container'>
      <header className='header'>
        <Row >
          <Col xs={3}><Button variant="link" onClick={onHomeClick}><h5>Home</h5></Button></Col>
          <Col xs={3}><Button variant="link" onClick={onAboutClick}><h5>About</h5></Button></Col>
          <Col xs={2}><Button variant="link" onClick={onAdClick}><h5>Ads</h5></Button></Col>
          <Col xs={1} ><Button variant="link" onClick={onCreatorClick}><h5>Partner</h5></Button></Col>
        </Row>
      </header>
      <main>
        <Home />
        <About />
        <Ad />
        <BusinessPartner />
      </main>
      <Button variant="light" className='upbutton' onClick={topClick}>
        <IoIosArrowDropupCircle />
      </Button>
    </Container>
  );
}

export default Main;