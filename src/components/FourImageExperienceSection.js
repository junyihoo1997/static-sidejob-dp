// Module Import
import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'

// Image Import
import FirstCorporateEvents from '../pictures/FirstCorporateEvents.jpg';
import SecondProductLaunch from '../pictures/SecondProductLaunch.jpg';
import ThirdWeddingService from '../pictures/ThirdWeddingService.jpg';
import ForthPrivateDining from '../pictures/ForthPrivateDining.png';

class FourImageExperienceSection extends Component{
    render() {
        return (   
            <div className="FourPicture_container">
              {/* Cooperate Events */}
                <a href="http://www.divinepalate.com/experiences">
                  <div className="Picture_container"> 
                    <Image src={FirstCorporateEvents} className="MaxPicture"/>
                      <div className="Black_blur_FOURIMG">
                      </div>
                      <div className="centered">
                        <p className = "Font_Styling_FIMG">CORPERATE <br/>EVENTS</p>
                          <hr className = "HR_Styling_FIMG" />
                      </div>
                  </div>
                  </a>
                  {/* Product Launch */}
                    <a href="http://www.divinepalate.com/experiences">
                        <div className="Picture_container">
                          <Image src={SecondProductLaunch} className="MaxPicture"/>
                          <div className="Black_blur_FOURIMG"></div>
                              <div className="centered">
                                <p className = "Font_Styling_FIMG">PRODUCT <br/> LAUNCH</p>
                                <hr className = "HR_Styling_FIMG" />
                              </div>
                           </div>
                    </a>
                    {/* Wedding Service */}
                    <a href="http://www.divinepalate.com/experiences">
                        <div className="Picture_container">
                            <Image src={ThirdWeddingService} className="MaxPicture"/>
                              <div className="Black_blur_FOURIMG"></div>
                                  <div className="centered">   
                                    <p className = "Font_Styling_FIMG">WEDDING <br/> SERVICE</p>
                                    <hr className = "HR_Styling_FIMG" />
                                  </div>
                                </div>
                    </a>
                    {/* Private Dining */}
                    <a href="http://www.divinepalate.com/experiences">
                        <div className="Picture_container">
                          <Image src={ForthPrivateDining} className="MaxPicture"/>
                            <div className="Black_blur_FOURIMG"></div>
                              <div className="centered">
                                <p className = "Font_Styling_FIMG">PRIVATE <br/> DINING</p>
                                <hr className = "HR_Styling_FIMG" />
                              </div>
                        </div>
                    </a>
            </div>
             )
            }
          }
export default FourImageExperienceSection   