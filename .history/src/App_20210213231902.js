import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import one from "./assests/one.png"
function App() {
  return (
    <div className="App">
      <div className="section2">
        <Row>
          <Col className="col-md-12 section2header ">
            <Col className="col-md-12 text-header">
              Satguru Bussiness Center For Bussiness
            </Col>
            <Col className="col-md-12 text-description">
              Satguru Bussiness Center For Bussiness Satguru Bussiness Center
              For Bussiness Satguru Bussiness Center For Bussiness Satguru
              Bussiness Center For Bussiness Bussiness Center For Bussiness
            </Col>
          </Col>
        </Row>

       <Container> <div className="col-md-12 imagepart " style={{background:"blue"}}>
<div class=" col-md-8 imagesection" style={{background:"red"}}>
            <img src={one} width="100%" />
            <div class="text-block">
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </div>
          </div>        </div>

                </Container>

      </div>
    </div>
  );
}

export default App;
