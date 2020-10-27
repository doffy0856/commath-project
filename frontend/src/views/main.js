import React from "react";
import { CardTitle, CardText, Row, Col,Card } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }
  return (
    <div className="App">
        <h1 style={{ marginTop: "5%" }}>เลือกบท</h1>
            
            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 1</h3>
                            </CardTitle>
                            <CardText>
                                <h4>BASIC COMPUTING</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("b2s")}}>
                                    <h3> Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
       
            
            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 2</h3>
                            </CardTitle>
                            <CardText>
                                <h4>LINEAR ALGEBRAIC EQUATIONS</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("elimination")}}>
                                    <h3>  Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 3</h3>
                            </CardTitle>
                            <CardText>
                                <h4>INTERPOLATION & CURVE-FITTING</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("interpolation")}}>
                                    <h3> Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 4</h3>
                            </CardTitle>
                            <CardText>
                                <h4>DIFFERENTIATION</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("differentiation")}}>
                                    <h3> Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
       

            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 5</h3>
                            </CardTitle>
                            <CardText>
                                <h4>INTEGRATION</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("integration")}}>
                                    <h3> Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
       

            <Row style={{ marginTop: "5%" }}>
                <Col sm="4"></Col>
                    <Col sm="6">
                    <div>
                        <Row>
                        <Col sm="8">
                            <Card>
                            <CardTitle>
                                <h3 style={{ marginTop: "10px" }}>บทที่ 6</h3>
                            </CardTitle>
                            <CardText>
                                <h4>ROOT-FINDING</h4>
                            </CardText>
                            
                                <button className="myButton" onClick={()=>{nextPage("root-finding")}}>
                                    <h3> Start</h3>
                                </button>
                                
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
       
    </div>
     
  );
}

export default Main;
                
            
           
 