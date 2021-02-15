import logo from './logo.svg';
import './App.css';
import {  Col, Container, Row } from 'reactstrap';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "react-bootstrap";

import one from "./assests/one.png"
import Layerfour from "./assests/Layerfour.png";

import Layerone from "./assests/Layerone.png";

import Layertwo from "./assests/Layertwo.png";

import Layerthree from "./assests/Layerthree.png";

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
          <Card>
            <Col className="col-md-12 text-description">
              <Col sm="10">
                <Row>
                  <div
                    style={{
                      display: "flex",
                      border: "2px solid red",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div
                      // className="col-md-8 col-sm-12 imagesection"
                      className="image-section-left-container"
                    >
                      <img src={one} className="image1"  />
                    </div>
                    {/*  */}
                    <div className="right-section" >
                      <div
                        class=" col-md-6  col-sm-12
                       "
                      >
                        <h4>Exclusive Offices</h4>
                        <h4>Nature</h4>
                        <p>What a beautiful sunrise</p>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Col>
          </Card>
        </div>

        <div className="section4">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Layerone} />
              <Card.Body>
                <Card.Title>Personal Spaces to nature brain</Card.Title>
              </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Layertwo} />
              <Card.Body>
                <Card.Title>Personal Spaces to nature brain</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img  variant="top" src={Layerthree} />
              <Card.Body>
                <Card.Title>Personal Spaces to nature brain</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Layerfour} />
              <Card.Body>
                <Card.Title>Personal Spaces to nature brain</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>

        {/*          
        <div className="col-md-12 imagepart " style={{ background: "blue" }}>
          <div class=" col-md-8 imagesection" style={{ background: "red" }}>
            <img src={one} height="100%" width="auto" />
            <div class="text-block">
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  );
}

export default App;
