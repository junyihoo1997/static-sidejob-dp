// Module Import
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


class MediaContactSection extends Component{
    render() {
        return (
            <div className="Main_Image_Content_Height_Style4  container-fluid">
               <div className="Full3">
                  <div className="Black_blur">
                      <Container>
                        <Row>
                          <Col></Col>
                          <Col></Col>
                          <Col>      
                            {/* Media Section */}
                            <div className="Transparent_Div_Style5 ">
                              <div className="container">
                                <div className="Transparent_Div_Style_Box5">
                                  <p className="Font_Styling_Gray Font_Size5">FEATURED AND STARRED</p>
                                  <p className="Font_Styling Font_Size5_Content">Leveraging on our reputation for trusted curation and on-demand inimitable service, we have the honour to be featured in multiple media avenues.</p>
                                  <p className="Font_Styling Font_Size5_Content">We aspire to take our expertise off the brick-and-mortar pedestal and bring it onto a regional stage.</p>
                                    <div className="Button_Position_Style">
                                    <button type="button" className="btnMediaHighlights">MEDIA HIGHLIGHTS</button>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                  <div className="Main_Image_Content_Height_Style7 container-fluid">
                      <div className="Black_blur">
                          <Container>
                            <Row>
                              <Col></Col>
                              <Col>
                                 {/* Get In Touch contact Section */}
                                  <div className="Transparent_Div_Style7">
                                    <div className="container">
                                      <div className="Transparent_Div_Style_Box7">
                                        <p className="Font_Styling_Gray Font_Size6">FROM THE ALLURING CUISINES TO A DINNING EXPERIENCE CRAFTED FOR YOU, LET US KNOW HOW WE MAY BE OF ASSISTANCE TO MAKE YOUR DINING EXPERIENCE AN OUTSTANDING ONE. </p>
                                      <div className="Button_Position_Style">
                                      <button type="button" className="btnGetInTouch">GET IN TOUCH</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
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
export default MediaContactSection   