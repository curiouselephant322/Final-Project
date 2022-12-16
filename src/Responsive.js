import Header from './Header'
import ProjectSidebar from './ProjectSidebar'
import NavigationButtons from './NavigationButtons'
import './Responsive.css'
import React, {useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {setRecoilState, useSetRecoilState, useRecoilValue} from 'recoil'
import { animationState } from './atoms.js'
import 'animate.css'

const Responsive = () => {

  const [lowFiTabValue, setLowFiTabValue] = useState(0)
  const [hiFiTabValue, setHiFiTabValue] = useState(0)


  const animationStateVal = useRecoilValue(animationState)
  const className = animationStateVal == 0 ? 'animated__backInRight' : 'animated__backInLeft'

  const handleTabChange = (event, newValue, identifier) => {
    var buttons = document.getElementsByClassName(identifier)
    for (let i= 0; i< buttons.length; i++) {
      if (i != newValue) {
        buttons[i].setAttribute('style', 'color: white; border-right: 1px solid white')
      }
    }
    event.target.setAttribute('style', 'color: cornflowerblue; border-right: 1px solid cornflowerblue')
    if (identifier == 'low-fi-tab') setLowFiTabValue(newValue)
    else setHiFiTabValue(newValue)
  }

  const description = "Redesigning and rebuilding a poorly designed webpage."

  return (
    <div>
      <Header/>
      <div id="br"></div>
      <div id="project-wrapper" className='animate__animated animate__backInLeft'>
        <ProjectSidebar name="Responsive Redesign" description={description}/>
        <div className="project-content-wrapper">
          <div style={{width: '95%'}}>
            <div className="project-right-wrapper">
              <img className='dev-image' src='../Responsive.png' align='right'></img>
              <div className="dev-right-main">
              <h2>Goal and Importance</h2>
                <p>The goal of this redesign was to practice the workflow of redesigning a simple website. The idea was to take 
                  away the skills necessary to analyze and identify flaws in an existing interface, create low-fidelity and 
                  high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes.                
                  </p>
                  <p>It is useful to be able to identify and analyze flaws in the interfaces we encouter browsing the web. 
                    This project allowed us to bolster this skill and to redesign a website using some of the common design 
                    processes undergone by frontend web developers.
                  </p>
                <h2>Identifying Usability Problems</h2>
                <h4>Picking a webpage</h4>
                <p>I was drawn to pick the <a target="__blank" style={{color:"cornflowerblue"}}href="https://www.pennyjuice.com/">Penny Juice website</a> due the its clear lack of unifying color schemes, its confusing and messy 
                  presentation, and it's shortfalls for mobile responsiveness. 
                </p>
                <h4>Problems with the website</h4>
                <p>I compiled a list of some of the main problems with the interface: </p>
                <ul>
                  <li><span style={{color: 'mediumpurple', fontWeight: 'bold'}}>Color: </span></li>
                  <ul>
                    <li>
                      A lack of a unifying color scheme
                    </li>
                    <li>
                      Poor contrast with some of the text and background color 
                    </li>
                    <ul>
                      <li>E.g. the color of the "100 blended fruit..." text</li>
                    </ul>
                  </ul>
                  <li><span style={{color: 'cornflowerblue', fontWeight: 'bold'}}>Responsiveness: </span>The website essentially falls apart with narrow screens </li>
                  <ul>
                    <li>
                      Formatting errors begin at widths less than 1025 pixels
                    </li>
                  </ul>
                  <li><span span style={{color: 'indianred', fontWeight: 'bold'}}>Layout/Design: </span></li>
                  <ul>
                    <li>Too much scrolling for too little content</li>
                    <li>Section headers are inconsistently formatted, creates confusion</li>
                    <li>A lot of extra unnecessary space that could be filled with content</li>
                  </ul>
                  <li><span style={{color: 'mediumpurple', fontWeight: 'bold'}}>Other:</span></li>
                  <ul>
                    <li>The sections and their corresponding text are repetitive</li>
                    <li>The nutrition facts, an important selling point for the brand, are impossible to read</li>
                    <li>The link to Facebook and the company's phone number that appears while scrolling should not belong</li>
                  </ul>
                </ul>
                <img className='dev-image' id='dev-image-responsive' src='../webAim.png' align='right'></img>
                <h4>Detecting Possible Accessibility Problems</h4>
                <p>I used the <a target="__blank" style={{color:"cornflowerblue"}} href="https://wave.webaim.org/">WebAIM WAVE</a> tool to detect possible accessibility problems that I may have not caught. WebAIM's evaluation, 
                shown in the image on the right, mainly emphasized the problems I had noticed. 
                </p>
                <p>
                I certainly agree with the issues detected by WebAIM, 
                most notably those raised about the website's low contrast and redundant links. 
                WebAIM detected 13 instances of very low color contrast, which is quite apparent upon first visiting the site. It also detected six redundant links, 
                another problem I had noticed in my earlier assessment. The multiple redundant links also speak to the redundancy of information of the website in general, 
                which becomes even more obvious when reading and comparing the text under each section.
                </p>
                <h2>Visual Dedesign</h2>
                <h4>Phase 1: Low-Fidelity Wireframing</h4>
                <p>Using Balsamiq, I created a total of 3 low-fidelity wireframes for my redesign, one for each of the screen sizes (mobile, tablet, desktop).</p>
              </div>
              {/* <div className="dev-link" style={{marginTop: '10px'}}>
                <a href="https://curiouselephant322.github.io/development/" style={{color: 'cornflowerblue'}}>See the website!</a>
                </div>  */}
                <div className="fi-content-container">
                  <div className="tabs-container" style={{display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'flex-start'}}>
                    <button className='tab low-fi-tab low-fi-tab-mobile' onClick={(e) => handleTabChange(e, 0, 'low-fi-tab')}>
                      Mobile
                    </button >
                    <button className='tab low-fi-tab mobile low-fi-tab-tablet' onClick={(e) => handleTabChange(e, 1, 'low-fi-tab')}>
                      Tablet
                    </button>
                    <button className='tab low-fi-tab mobile low-fi-tab-desktop' onClick={(e) => handleTabChange(e, 2, 'low-fi-tab')}>
                      Desktop
                    </button>
                </div>
                <div>
                  {lowFiTabValue == 0 &&
                  <div>
                      <img id="wireframe-img" alt="Phone Wireframe" src="iPhone-Wireframe.png"/>
                  </div>
                  }
                  {lowFiTabValue == 1 &&
                    <div>
                      <img id="wireframe-img" alt="Phone Wireframe" src="Tablet-Wireframe.png"/>
                    </div>
                  }
                  {lowFiTabValue == 2 &&
                    <div>
                      <img id="wireframe-img" alt="Phone Wireframe" src="Desktop-Wireframe.png"/>
                    </div>
                  }
                </div>
                </div>
                <h4>Phase 2: Visual Design Style Guide</h4>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img id="style-guide-img" alt="Design Style Guide" src="style-guide-pic.png"/>
                </div>
                
                <h4>Phase 3: High-fidelity Wireframing</h4>
                <p>I used Figma to make a hi-fi prototype for mobile, tablet, and desktop. The numbers represent annotations, which can be 
                    seen as the bottom of the pdf. </p>
                <div className="fi-content-container">
                  <div className="tabs-container" style={{display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'flex-start'}}>
                    <button className='tab hi-fi-tab hi-fi-tab-mobile' onClick={(e) => handleTabChange(e, 0, 'hi-fi-tab')}>
                      Mobile
                    </button >
                    <button className='tab hi-fi-tab mobile hi-fi-tab-tablet' onClick={(e) => handleTabChange(e, 1, 'hi-fi-tab')}>
                      Tablet
                    </button>
                    <button className='tab hi-fi-tab mobile hi-fi-tab-desktop' onClick={(e) => handleTabChange(e, 2, 'hi-fi-tab')}>
                      Desktop
                    </button>
                  </div>
                  {hiFiTabValue == 0 &&
                  <div>
                      <div class="hi-fi-pdf">
                        <embed src= "mobile-hifi.pdf" type="application/pdf" width= "580" height= "580"></embed>
                      </div>
                     {/* <div style={{display: 'flex', height: 'fit-content'}}>
                      <img id="hi-fi-img-mobile" alt="Phone Hifi 2" src="mobile-hifi-1.png"/>
                      <img id="hi-fi-img-mobile" alt="Phone Hifi 2" src="mobile-hifi-2.png"/>                  
                    </div> */}
                  </div>                
                  }
                  {hiFiTabValue == 1 &&
                    <div>
                      <div class="hi-fi-pdf tablet-pdf">
                        <embed src= "tablet-hifi.pdf" type="application/pdf" width= "580" height= "580"/>
                      </div>
                      {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img id="hi-fi-img-tablet" alt="Tablet Hifi 1" src="tablet-hifi-1.png"/>
                        <img id="hi-fi-img-tablet" alt="Tablet Hifi 2" src="tablet-hifi-2.png"/>
                      </div> */}
                    </div>
                  }
                  {hiFiTabValue == 2 &&
                    <div>                   
                      <div class="hi-fi-pdf desktop-pdf">
                        <embed src= "desktop-hifi.pdf" type="application/pdf" width= "620" height= "700"/>
                      </div>
                      {/* <div>
                        <img id="hi-fi-img-desktop" alt="Desktop Hifi" src="desktop-hifi.png"/>
                      </div> */}
                    </div>
                  }
                </div>
                <h2>Final Product</h2>
                <p>Finally, I used HTML and CSS to implement my new design. Follow this <a target="__blank" href="https://curiouselephant322.github.io/Penny-Juise-Redesign/" style={{color: 'cornflowerblue'}}>link</a> to the redesigned website!</p>
                <h2>Reflection</h2>
                <p>This project helped me develop useful and thorough design practices by following a defined process. 
                  My skills in low-fi and hi-fi protoyping in Balsamiq and Figma, respectively, improved 
                  quite a bit along the way as well. The next step might be to choose a more robust but poorly made website from a brand and to 
                  construct an ambitious redesign plan. After it has been implemented, it might even be submitted to the brand's 
                  web development team for review/feedback.
                </p>
              
              
               
                
               
               
            </div>
            </div>
        </div>
        <NavigationButtons name="Responsive"/>
      </div>
    </div>
  )
}

export default Responsive;