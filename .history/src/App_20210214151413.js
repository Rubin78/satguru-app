import logo from './logo.svg';
import './App.css';
import { Card, Col, Container, Row } from 'reactstrap';
import one from "./assests/one.png"
function App() {
  return (
    <div>
      <div className="section2">
        <Col className="col-md-12 text-header1">
          Satguru Bussiness Center For Bussiness
        </Col>
        <Col className="col-md-12 text-description">
          <Col col-12 sm="10">
            Satguru Bussiness Center For Bussiness Satguru Bussiness Center For
            Bussiness Satguru Bussiness Center For Bussiness Satguru Bussiness
            Center For Bussiness Bussiness Center For Bussiness Bussiness Center
            For Bussiness Bussiness Center For Bussiness Bussiness Center For
            Bussiness Bussiness Center For Bussiness Bussiness Center For
            Bussiness Bussiness Center For Bussiness
          </Col>
        </Col>




        <div className="imagesectioncontent">


          </div>
        {/* <Card>

          <Col className="col-md-12 text-description">
            
            <Col sm="10">
              <Row>
                <div
                  className="col-md-8 col-sm-12 imagesection"
                  style={{ background: "red" }}
                >
                  <img src={one} className="image1" />
                </div>
                          <h4>Exclusive Offices</h4>

                <div class=" col-md-6  col-sm-12 text-block">
                  <h4>Nature</h4>
                  <p>What a beautiful sunrise</p>
                </div>
              </Row>
            </Col>
          </Col>
        </Card> */}
        {/* 
        <div className="col-md-12 imagepart " style={{ background: "blue" }}>
          <div class=" col-md-8 imagesection" style={{ background: "red" }}>
            <img src={one} height="100%" width="auto" />
            <div class="text-block">
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
