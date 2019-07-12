// Module Import
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

// Image Import
import Christofle from '../pictures/Christofle.png';

class MenuPartnerSection extends Component{
    render() {
        return (
            <div className="Main_Image_Content_Height_Style3  container-fluid">
              <div className="Full2">
                <div className="Black_blur">
                  {/* Menu Section*/}
                  <Container>
                    <Row>
                      <Col></Col>
                      <Col></Col>
                      <Col>           
                        <div className="Transparent_Div_Style3">
                          <div className="container">
                            <div className="Transparent_Div_Style_Box3">
                              <p className="Font_Styling_Gray Font_Size3">A TASTE OF REFINED LUXURY</p>
                              <p className="Font_Styling Font_Size3_Content">We pledge to nothing but the best. Our commitment to premium selections results in dishes bursting with rich flavors that tantalize both palate and mind. Our masterpieces are also built on a foundation of high respect for ingredients and where they come from. We proudly source our superior food elements from trusted and reputable suppliers, wineries and artisans from all over the world to set your tastebuds afire. </p>
                                <div className="Button_Position_Style">
                                  <button type="button" className="btnViewOurMenu">VIEW OUR MENU</button>
                                </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                </Container>
              {/* Partner Section */}
                  <div className="Main_Image_Content_Height_Style6 container-fluid">
                    <div className="Black_blur">
                        <Container>
                            <Row>
                              <Col>           
                                <div className="Transparent_Div_Style4">
                                  <div className="container">
                                    <div className="Transparent_Div_Style_Box4">
                                        <p className="Font_Styling_Gray Font_Size4">THE BEST EXPERIENCES MUST BE SHARED</p>
                                        <p className="Font_Styling2 Font_Size4_Content">We have partnered with the very best like Christofle and Carlo Moretti to deliver our ethos of creating divine experiences like no other. Our collaborative pairings don’t just end there.</p>
                                        <p className="Font_Styling2 Font_Size4_Content">Therefore, we endeavour to be an open door for partners and vendors of different spectrum for creative ventures in order to bring you an incomparable dining experience of your dreams.</p>
                                        <br/>
                                        <Image src={Christofle} className="Christofle"/>
                                        <br/>
                                          <div className="Button_Position_Style">
                                          <button type="button" className="btnBeOurPartners">BE OUR PARTNER</button>
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
export default MenuPartnerSection   