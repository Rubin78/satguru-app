import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import { Button,CardGroup,CardImg,CardDeck ,Text,Card} from "react-bootstrap";

import one from "./assests/one.png"

function App() {
  return (
    <div>
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
        <div className="col-md-12 imagepart " style={{ background: "blue" }}>
          <div class=" col-md-8 imagesection" style={{ background: "red" }}>
            <img src={one} height="100%" width="auto" />
            <div class="text-block">
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="section3">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
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
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default App;
