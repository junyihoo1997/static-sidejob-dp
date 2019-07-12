// Module Import
import React, {Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class SignUpSection extends Component{
    render() {
        return (
            <div className="Main_Image_Content_Height_Style8 container-fluid">
              <div className="Black_blur">
                  <Container>
                    <Row>
                        <Col></Col>
                        <Col>        
                            {/* Sign Up Section */}
                          <div className="Transparent_Div_Style8">
                            <div className="container">
                              <div className="Transparent_Div_Style_Box8">
                                <p className="Font_Styling_Gray Font_Size7">RECEIVE OUR DINING NEWSLETTER</p>
                                <p className="Font_Styling3 Font_Size7_Content">Be first to know when we unveil new menus, announce privé events, and share other exclusive updates.</p>
                                <br/>
                                  <form className="Font_Size7_Form">
                                    <input placeholder="First Name" className="Input_Text_Styling"></input>
                                    <br/>
                                    <input placeholder="Last Name" className="Input_Text_Styling"></input>
                                    <br/>
                                    <input placeholder="D.O.B (DD/MM/YY)" className="Input_Text_Styling"></input>
                                    <br/>
                                    <input placeholder="Email" className="Input_Text_Styling"></input>
                                  </form>
                                  <div className="Button_Position_Style">
                                  <button type="submit" className="btnSignup">SIGN UP</button>
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
             )
            }
          }
export default SignUpSection   