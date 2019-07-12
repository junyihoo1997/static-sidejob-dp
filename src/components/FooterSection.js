// Module Import
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'

// Image Import
import DivinePalate2 from '../pictures/DivinePalate2.png';
import FBDP from '../pictures/FBDP.png';
import IGDP from '../pictures/IGDP.png';
import INDP from '../pictures/INDP.png';

class FooterSection extends Component{
    render() {
        return (  
            <footer className="footer text-center" id="message">
                <div className="container-fluid LOLO">
                    <Image src={DivinePalate2} className="DP2"/>
                    <br/>      
                    <p className="Font_Styling_Footer">DIVINE PALATE PTE. LTD.<br/> CO REG: 201405862N <br/> NEA LICENSE: CE12270V000</p>
                    <br/>
                        <Container>
                            <Row >
                                <Col> 
                                {/* Facebook */}
                                    <div>
                                      <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign">
                                          <h3 className="white1">OFFICE</h3>
                                          <p className="FooterNavColor ">10 DUXTON HILL, SINGAPORE 089594</p>
                                            <div className="Footer_Hover">
                                                <Nav.Link href="https://www.facebook.com/DivinePalate/" eventKey="link-1" target="_blank" className="FooterNavColor "><Image src={FBDP} className="FBDP"/></Nav.Link>
                                                <br/>
                                                <br/>
                                                <p className="FooterNavColor2 ">@divinepalate</p>
                                            </div>
                                      </Nav>
                                    </div>
                                </Col>
                                <Col>   
                                {/* Instagram */}
                                    <div>  
                                        <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign1">
                                        <h3 className="white ">E MAIL</h3>
                                        <p className="FooterNavColor ">ENQUIRIES@DIVINEPALATE.COM</p>
                                          <div className="Footer_Hover">
                                            <Nav.Link href="https://www.instagram.com/divine_palate/" target="_blank" eventKey="link-1" className="FooterNavColor "><Image src={IGDP} className="IGDP"/></Nav.Link>
                                            <br/>
                                            <br/>
                                            <p className="FooterNavColor2 ">divine_palate</p>
                                          </div>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col>          
                                {/* Linkedin */}
                                    <div>
                                      <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign2">
                                      <h3 className="white2">CALL US</h3>
                                      <p className="FooterNavColor ">+65.6219.9026</p>
                                        <div className="Footer_Hover">
                                          <Nav.Link href="#LINKEDIN" eventKey="link-1" target="_blank" className="FooterNavColor "><Image src={INDP} className="INDP"/></Nav.Link>
                                          <br/>
                                          <br/>
                                          <p className="FooterNavColor2 ">divinepalate</p>
                                        </div>
                                      </Nav>
                                    </div>
                                </Col>
                          </Row>
                      </Container>
                    </div>
              </footer>
             )
            }
          }
export default FooterSection   
            