import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import one from "./assests/one.png"
function App() {
  return (
    // <div >
    //   <div className="section2">
    //     <Row>
    //       <Col className="col-md-12 section2header ">
    //         <Col className="col-md-12 text-header1">
    //           Satguru Bussiness Center For Bussiness
    //         </Col>
    //         <Col className="col-md-12 text-description">
    //           Satguru Bussiness Center For Bussiness Satguru Bussiness Center
    //           For Bussiness Satguru Bussiness Center For Bussiness Satguru
    //           Bussiness Center For Bussiness Bussiness Center For Bussiness
    //         </Col>
    //       </Col>
    //     </Row>
    //     <div className="col-md-12 imagepart " style={{ background: "blue" }}>
    //       <div class=" col-md-8 imagesection" style={{ background: "red" }}>
    //         <img src={one} height="100%" width="auto" />
    //         <div class="text-block">
    //           <h4>Nature</h4>
    //           <p>What a beautiful sunrise</p>
    //         </div>
    //       </div>{" "}
    //     </div>
    //   </div>

    // </div>

    <div className="section2">
      <Col className="col-md-12 section2header ">
        <Col className="col-md-9 text-header1">
          Satguru Bussiness Center For Bussiness
        </Col>
      </Col>
      <Col className="col-md-10 text-description">
        // Satguru Bussiness Center For Bussiness Satguru Bussiness Center //
        For Bussiness Satguru Bussiness Center For Bussiness Satguru //
        Bussiness Center For Bussiness Bussiness Center For Bussiness //{" "}
      </Col>
    </div>
  );
}

export default App;
