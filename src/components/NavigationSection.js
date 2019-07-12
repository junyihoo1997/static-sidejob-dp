// Module Import
import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';

// Image Import
import DivinePalate from '../pictures/DivinePalate.png';

class NavigationSection extends Component{
        // React toggle function for shrink
        state = {
            active: false,
            active2: false
          }
          // Window On scroll function
          componentDidMount() {
            window.onscroll = () => this.handleScroll()
          }
          //handle scroll function in react
          handleScroll() {
            if (document.documentElement.scrollTop > 0) {
              this.setState({ active2: true });
            } else {
              this.setState({ active2: false });
            }
          }
    render() {
        return (
          // Navigation all functions with links
          <div id="nav" className={[this.state.active2 ? "shrink ":"  container-fluid",this.state.active ? "shrink2 container-fluid":"  container-fluid"].join("")}>
              <div className="toggle">
                <Row>
                  <Col>
                    <li>
                      <a href="./" ><Image src={DivinePalate} className="DPIMGHidden"/></a>
                    </li>
                  </Col>
                  <Col>
                    <i className={this.state.active ? "fa fa-arrow-left  ToogleStyle2":"fa fa-bars  ToogleStyle  "}  aria-hidden="true"onClick={() => this.setState({active: !this.state.active})}></i>
                  </Col>
                </Row>
              </div>
              <div id="logo" className="container-fluid">
                  <ul className={this.state.active ? "active ":"non-active "}  >
                      <li className="DPIMG">
                        <a href="./" ><Image src={DivinePalate} className="DPIMG"/></a>
                      </li>
                      <li>
                        <a href="./" className="cool-link">HOME</a>
                      </li>
                      <li>
                        <Link to={'/experiences'} className="cool-link"> EXPERIENCES</Link>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/about" className="cool-link">ABOUT</a>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/menu" className="cool-link">MENU</a>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/media" className="cool-link">MEDIA</a>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/gallery" className="cool-link">GALLERY</a>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/partners" className="cool-link">PARTNERS</a>
                      </li>
                      <li>
                        <a href="http://www.divinepalate.com/contact" className="cool-link">CONTACT</a>
                      </li>
                  </ul>
              </div>
          </div>
             )
            }  
           }
  export default NavigationSection   