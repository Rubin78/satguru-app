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
          </Card>
        </div>

        <div className="section4">
          <CardGroup>
            
            <Card>
              <Card.Img variant="top" src={one}/>
              <Card.Body>
                <Card.Title>Personal Spaces to nature brain</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          
        
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
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
