//Module import
import React, {Component} from 'react'
import '../App.css';

// File Import
import SimplyDivineMainSection from '../components/SimplyDivineMainSection'
import NavigationSection from '../components/NavigationSection'
import FourImageExperienceSection from '../components/FourImageExperienceSection'
import ExperiencesAboutSection from '../components/ExperiencesAboutSection'
import MenuPartnerSection from '../components/MenuPartnerSection'
import MediaContactSection from '../components/MediaContactSection'
import SignUpSection from '../components/SignUpSection'
import FooterSection from '../components/FooterSection'

class HomePage extends Component{

    render() {
        return (
            <div className="AllStyle">
                <NavigationSection/>
                <SimplyDivineMainSection/>
                <FourImageExperienceSection/>
                <ExperiencesAboutSection/>
                <MenuPartnerSection/>
                <MediaContactSection/>
                <SignUpSection/>
                <FooterSection/>
            </div>
        )
    }
   }
export default HomePage