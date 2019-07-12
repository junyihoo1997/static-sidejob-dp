// Module Import
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class ExperiencesAboutSection extends Component{
    render() {
        return (
                <div className="Main_Image_Content_Height_Style2  container-fluid ">
                    <div className="Full">
                        <div className="Black_blur">
                            {/* Discover Experience Section */}
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col>           
                                        <div className="Transparent_Div_Style1">
                                            <div className="container container-fluid">
                                                 <div className="Transparent_Div_Style_Box1">
                                                    <p className="Font_Styling_Gray Font_Size1">PERSONAL, AUTHENTIC, SPONTANEOUS;</p>
                                                    <p className="Font_Styling Font_Size1_Content">Embark your guests on a gastronomic expedition with our experienced cuisinier and sommelier, while our director ensures that your next social gathering or event will be a truly distinctive and unforgettable one. </p>
                                                    <p className="Font_Styling Font_Size1_Content">This is the dining experience of divine calibre.</p>
                                                    <div className="Button_Position_Style">
                                                    <button type="button" className="btnDiscoverExperience">DISCOVER EXPERIENCES</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* About us Section */}
                            <div className="Main_Image_Content_Height_Style5  container-fluid">
                                <div className="Black_blur2">
                                    <Container >
                                        <Row>
                                            <Col>              
                                                <div className="Transparent_Div_Style2">
                                                    <div className="container">
                                                        <div className="Transparent_Div_Style_Box2">
                                                            <p className="Font_Styling_Gray Font_Size2">“ART IS AN INSPIRATION BUT GOOD FOOD WITH IMPECCABLE SERVICE — THAT IS OUR PASSION.”</p>
                                                            <p className="Font_Styling2 Font_Size2_Content">We are purveyors of unique private dining concepts, encompassing both culinary and concierge, engineered to offer clients unforgettable dining experiences.</p>
                                                            <div className="Button_Position_Style">
                                                            <button type="button" className="btnAboutUs">ABOUT US</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             )
         }
    }
export default ExperiencesAboutSection   