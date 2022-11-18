import React from 'react';
import './Upload.css';

import Profile from '../mypage/component/Profile';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const UploadPage = () => {
  return (
    <div className='upload_container'>
    <Container>
      <Row xs={2}>
        <Col xs={2}>
          <Profile />
        </Col>
        <Col xs={10}>
          <Row>
            <div> upload</div>
          </Row>
          <Row>
          </Row>
        </Col>          
      </Row>
    </Container>
    </div>
  );
}

export default UploadPage;
