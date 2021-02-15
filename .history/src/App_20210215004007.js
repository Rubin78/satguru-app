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
import post1 from "./assests/post1.png";

import post2 from "./assests/post2.png";


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
                  <div className="main-container-wrapper">
                    <div
                      // className="col-md-8 col-sm-12 imagesection"
                      className="image-section-left-container"
                    >
                      <img src={post1} className="image1" />
                    </div>
                    {/*  */}
                    <div className="right-section">
                      <div
                        class=" col-md-12  col-sm-12
                       "
                      >
                        <div className="top-text">
                          <h4>Exclusive Offices</h4>
                        </div>

                        <div className="content">
                          <h4 style={{}}>
                            {" "}
                            Expert Assistance to setup company in U.A.E
                          </h4>

                          <Row>
                            <Col md="6" className="coltext">
                              <p>‣ Cutting edge technology</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                            </Col>
                            <Col md="6" className="coltext">
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Col>
          </Card>
        </div>
      </div>

      <div className="section4">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={Layerone} />
            <Card.Body id="text1">
              <Card.Title>
                Personal Spaces to nature ur brainstorming
              </Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={Layertwo} />
            <Card.Body id="text2">
              <Card.Title>Personal Spaces to nature brain</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Layerthree} />
            <Card.Body id="text3">
              <Card.Title>Personal Spaces to nature brain</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Layerfour} />
            <Card.Body id="text4">
              <Card.Title>Personal Spaces to nature brain</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      <div className="imagesectioncontent">
        <Card>
          <Col className="col-md-12 text-description">
            <Col sm="10">
              <Row>
                <div className="main-container-wrapper2">
                  <div className="left-section">
                    <div
                      class=" col-md-12  col-sm-12
                       "
                    >
                      <div className="top-text">
                        <h4>Concierge Services</h4>
                      </div>

                      <div className="content">
                        <h4 style={{}}>
                          {" "}
                          Expert Assistance to setup company in U.A.E
                        </h4>

                        <Row>
                          <Col md="6" className="coltext">
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                          </Col>
                          <Col md="6" className="coltext">
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                            <p>‣ thisis this the text</p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <div
                    // className="col-md-8 col-sm-12 imagesection"
                    className="image-section-left-container"
                  >
                    <img src={post2} className="image1" />
                  </div>
                  {/*  */}
                </div>
              </Row>
            </Col>
          </Col>
        </Card>
      </div>

      <div className="section8">
        <div className="imagesectioncontent">
          <Card>
            <Col className="col-md-12 text-description">
              <Col sm="10">
                <Row>
                  <div className="main-container-wrapper">
                    <div
                      // className="col-md-8 col-sm-12 imagesection"
                      className="image-section-left-container"
                    >
                      <img src={one} className="image1" />
                    </div>
                    {/*  */}
                    <div className="right-section">
                      <div
                        class=" col-md-12  col-sm-12
                       "
                      >
                        <div className="top-text">
                          <h4>Bussiness Setup Services</h4>
                        </div>

                        <div className="content">
                          <h4 style={{}}>
                            {" "}
                            Expert Assistance to setup company in U.A.E
                          </h4>

                          <Row>
                            <Col md="6" className="coltext">
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                            </Col>
                            <Col md="6" className="coltext">
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                              <p>‣ thisis this the text</p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Col>
          </Card>
        </div>
      </div>

      <div className="section7">
        <Row>
          <Col md="1"></Col>
          <Col md="7">
            <div style={{ height: 450, padding: 50 }}>
              <Col className="footertext">
                A setup in this bustling city surrounded by{" "}
              </Col>
              <Col className="footertext">
                {" "}
                your client hub can give your bussiness the
              </Col>
              <Col className="footertext">
                {" "}
                wings its need to make an impact.
              </Col>

              <Col className="footertext1">
                <p>Move in and start working immediately </p>
                <p> No large upfront payment</p>
              </Col>
              <Col
                md="12"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: 25,
                }}
              >
                <Button className="visitbutton">Book A Visit</Button>
              </Col>
            </div>
          </Col>
          <Col md="4">
            <div style={{ height: 450, padding: 50 }}>
              <Col className="footertext">OFFICE ADDRESS</Col>
              <Col className="footertext1">
                <p>suite 1501 -1508, XL Tower,</p>
                <p> Al Abraj Street,</p>
                <p>Business Bay, Dubai, UAE</p>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
