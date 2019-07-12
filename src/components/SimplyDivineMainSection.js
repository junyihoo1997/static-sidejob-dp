// Module Import
import React, {Component} from 'react'
import WOW from'wowjs'; //wow js to build the slideinleft animation for icons

class SimplyDivineMainSection extends Component{
  componentDidMount(){
      // Wowjs Function
    new WOW.WOW().init();
 }
    render() {
        return (
          // Main Simply Divine Section
            <div className="Main_Image_Content_Height_Style container-fluid">
              <div className="Transparent_Div_Style_Main container">
                  <div className="container TestMain">
                    <section className="wow slideInDown" data-wow-iteration="1" data-wow-offet="80" data-wow-delay=".5s">
                      <p className="Font_Styling_Main">SIMPLY DIVINE</p> <br/>
                      <hr className="container Main_hr_Styling"/><br/>
                      <p className="Font_Styling_Main2">STAY AHEAD OF THE DINING CURVE WITH DIVINE PALATE</p>
                    </section>
                  </div>
              </div> 
            </div>
             )
            }
           }
export default SimplyDivineMainSection   