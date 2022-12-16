import Header from './Header'
import ProjectSidebar from './ProjectSidebar'
import NavigationButtons from './NavigationButtons'
import './Iterative.css'
import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {setRecoilState, useSetRecoilState, useRecoilValue} from 'recoil'
import { animationState } from './atoms.js'
import 'animate.css'
import {Link} from 'react-router-dom'

const Iterative = () => {

  const animationStateVal = useRecoilValue(animationState)

  console.log(animationStateVal)
  const className = animationStateVal == 0 ? 'animated__backInRight' : 'animated__backInLeft'

  console.log(className)

  const description = "Working in a group to design an interactive mobile interface for an emerging startup"



  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue, identifier) => {
    var buttons = document.getElementsByClassName(identifier)
    for (let i= 0; i< buttons.length; i++) {
      if (i != newValue) {
        buttons[i].setAttribute('style', 'color: white; border-bottom: 1px solid white')
      }
    }
    event.target.setAttribute('style', 'color: cornflowerblue; border-bottom: 1px solid cornflowerblue')
    if (identifier == 'it-sketches-tab') setTabValue(newValue)
  }

  return (
    <div>
      <Header/>
      <div id="br"></div>
      <div id="project-wrapper" className='animate__animated animate__backInLeft'>
        <ProjectSidebar name="Iterative Design" description={description}/>
        <div className="project-content-wrapper">
          <div style={{width: '97%'}}>
            <div className="project-right-wrapper">
              <img id='it-image' src='Iterative.png' align='right'></img>
              <div className="dev-right-main">
              <h2>Goal and Importance</h2>
                <p>The goal of this group project was to find a startup concept from a recent <a style={{color: 'cornflowerblue'}} href="https://www.ycombinator.com/companies?batch=S22&batch=W23&batch=W22&status=Active">YCombinator demo day</a>
                 . The idea was to go through the full process of mocking up a solution to the startup's concept. This project reinforces the 
                 design practices followed in the <Link to='/responsive' style={{color: "cornflowerblue"}}>Responsive Redesign</Link> project, but this time from a different angle, 
                 as the startup's concept and goal had to be taken into consideration.
                 </p>
                <h2>Overview</h2>
                <p>
                  The project was split into four parts to exemplify an iterative design process flow: (1) sketching ideas of the interface, (2)
                  creating an interactive, high-fidelity prototype, (3) conducting user testing on a final, revised prototype, and (4) contacting
                  the startup.
                </p>
                <h2>Selecting the Startup: Dr. Treat</h2>
                <p>"One Medical for Pets."</p>
                <p>Based out of San Francisco and geared toward millenial pet parents, Dr. Treat aims to offer virtual and in-clinic services as well 
                  as highly personalized care for every pet. 
                </p>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                  <a style={{fontSize: '1.1em', color: 'cornflowerblue'}} target="__blank" className="dr-treat-anchor" href="https://www.drtreat.com/">
                    See the Dr. Treat Website!
                  </a>
                </div>
               

              </div>
             
            </div>
            <hr style={{marginTop: '20px'}}></hr>
            <h2>Sketching and Wireframing</h2>
            <h4>Initial Sketches and Ideas</h4>
            <p>First, we brainstormed 4 possible designs for the content and layout of our startup's app.</p>
            <div className="tabs-container" style={{display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', marginBottom: '20px'}}>
                <button id= "in-sketches-paid-profile" className='it-sketches-tab' onClick={(e) => handleTabChange(e, 0, 'it-sketches-tab')}>
                  The Paid Profile
                </button >
                <button id= "in-sketches-free-profile" className='it-sketches-tab' onClick={(e) => handleTabChange(e, 1, 'it-sketches-tab')}>
                  The Free Profile
                </button>
                <button id= "in-sketches-emergencies" className='it-sketches-tab' onClick={(e) => handleTabChange(e, 2, 'it-sketches-tab')}>
                  Emergencies
                </button>
                <button id= "in-sketches-pet-profiles" className='it-sketches-tab' onClick={(e) => handleTabChange(e, 3, 'it-sketches-tab')}>
                  Pet Profiles
                </button>
              </div>
                <div>
                  {tabValue == 0 &&
                  <div>
                    <p style={{width: '90%'}}>For the paid profile page, a user would begin on the home page, which might have a screen of icons indicating 
                      different types of animals. Clicking on a pet icon would lead to a specialized <i>Pet Information</i> page
                      that would contain information on how to take care of your animal in different emergency situations.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <img id="paid-profile-img" alt="Paid profile image" src="thePaidProfile.jpeg"/>
                    </div>
                  </div>
                  }
                  {tabValue == 1 &&
                    <div>
                      <p style={{width: '90%'}}>For the free profile page, a user would see almost all the same features as on the paid screen. However,
                        if they were to click on a paid version option they would be prompted to sign up for Dr. Treat.
                        With this version, they would still be able to access the entirety of the common ailments and symptoms for a pet, drawing
                        heavy inspiration from the <a target="__blank" href="American Red Cross First Aid app" style={{color: 'cornflowerblue'}}>American Red Cross First Aid app.</a> There would be a list of common emergencies,
                        and clicking into a specific emergency would show how to spot and treat that case, as well as provide a general set of
                        "next steps" for the owners.
                      </p>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img id="wireframe-img" alt="Free Profile image" src="theFreeProfile.jpeg"/>
                      </div>
                    </div>
                    
                  }
                  {tabValue == 2 &&
                    <div>
                      <p style={{width: '90%'}}>
                        The emergency page, ultimately accessible through the home page, would prompt users with a step-by-step process to 
                        discover symptoms and connect pet owners with a specialist. Starting at the main emergency screen, the user would choose 
                        an animal, narrow down the issue, and then talk to a live veteranarian via a chat to learn how to best take care of their pet. 
                      </p>
                       <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img id="wireframe-img" alt="Emergencies image" src="emergencies.png"/>
                      </div>
                    </div>
                   
                  }
                   {tabValue == 3 &&
                    <div>
                      <p style={{width: '90%'}}>The pet profiles page, accessible by pressing the <i>Profiles</i> button on the home screen, would contain a page of all 
                      the current pets registered in Dr. Treat by the user. From the profiles page, the user would click on one of their pets to see 
                      information about general health, past visits, etc. The user could also add a pet to their profiles page, leading to a 
                      page where they could select the type of animal, add in any known information, and upload any 
                      relevant documents or medical history. </p>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img id="pet-profiles-img" alt="Pet Profiles image" src="petProfiles.jpeg"/>
                      </div>
                    </div>
                  }
                </div>
                <h4>Combining Ideas into a Wireframe</h4>
                <p>After discussing with our group, we made a set of wireframes in Balsamiq to finalize the rough design of our app.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img id="it-wireframe" alt="Iterative wireframe 1" src="iterative-wireframe-1.png" />
                  <img style={{marginLeft: '-10px'}}id="it-wireframe" alt="Iterative wireframe 1" src="iterative-wireframe-2.png" />
                </div>
                <hr style={{marginTop: '20px'}}></hr>
                <h2>Mockups</h2>
                <h4>Interactive Hi-fi Mockup</h4>
                <p>We then used Figma to make our first hi-fi mockup, based on our Balsamiq wireframes. The mockup is interactive, so feel free to click 
                  on the screen or shuffle through slideshow to see the different pages. 
                </p>
                <div className="iframe-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                  <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                  width="70%" 
                  height="450" 
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhiScXEgqt94Cuu525TL91y%2FIterative-Design-Wireframe%3Fpage-id%3D14%253A36%26node-id%3D14%253A38%26viewport%3D236%252C578%252C0.25%26scaling%3Dscale-down%26starting-point-node-id%3D14%253A38" allowfullscreen>

                  </iframe>
                </div>
                <h4>Mockup Crit: Our Feedback</h4>
                <p>After building our hi-fi prototype, we presented our design to some of our classmates, who in turn gave us constructive feedback. Their feedback is 
                  compiled into the list below: </p>
                <ul style={{width: '90%'}}>    
                  <li style={{color: 'mediumpurple'}}>Formatting/Layout: </li>
                  <ul>
                    <li>Revamp the hamburger menu optinos to ensure the optinos are actions the user would actually want to complete</li>
                    <li>Hide the nav bar when using the chat so that buttons aren't accidentally clicked</li>
                    <li>The emergency button on the bottom is promblematic</li>
                    <ul>
                      <li>It is likely to get accidentally pressed</li>
                    </ul>
                    <li>The at home diagnosis page should be more flushed out, the list of symptoms is overwhelming</li>
                  </ul>
                  <li><span style={{color: 'cornflowerblue'}}>Navigation: </span> A local back button may be helpful</li> 
                  <li style={{color: 'indianred'}}>Affordances: </li>
                  <ul>
                    <li>Include affordances in the appointment tab to make it intuitive to schedule an appointment</li>
                    <li>Generally, improve the icons</li>
                    <ul>
                      <li>E.g. it is unclear what the paw print leads too, and it is also redundant with the "Your Pets" section on the home page </li>
                    </ul>
                  </ul>
                  <li style={{color: 'mediumpurple'}}>Other: </li>
                  <ul>
                    <li>Include an option to schedule appointments within the individual pet tab</li>
                    <li>Users forget the name of the app while using it, so ensure it is somewhere in the interface</li>
                    <li>The grid is great with icons + labels. I wish the home page had something other than the grid</li>
                    <ul>
                      <li>E.g. maybe a simple welcome message that take up 1/3 of the page, or some kind of "status" for the users's pets</li>
                    </ul>
                    <li>For the individual pet page, maybe make the personal care plan like a daily care plan where the owner can mark 
                     off what they have done so they can keep track of what care plan they still need to do througout the day</li>
                  </ul>
                </ul>
                <p>Taking the criticisms and advice presented above into consideration, we then made a final iteration to our prototype, which can be seen below:  </p>
                <div className="iframe-wrapper" style={{display: 'flex', justifyContent: 'center'}}>
                  <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} 
                  width="70%" 
                  height="450" 
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhiScXEgqt94Cuu525TL91y%2FIterative-Design-Wireframe%3Fpage-id%3D220%253A3116%26node-id%3D220%253A3875%26viewport%3D456%252C395%252C0.24%26scaling%3Dscale-down%26starting-point-node-id%3D220%253A3875" allowfullscreen></iframe>
                </div>
                <hr style={{marginTop: '20px'}}></hr>
                <h2>User Testing</h2>
                <p>Having test users try out an interface is an important part of testing and a valuable source of feedback. We conducted our 
                  own usability test through a remove user testing service (<a style={{color: 'cornflowerblue', textDecoration: 'none'}}>UserTesting.com</a>). We
                  provided the following instructions and questions for the testers:
                </p>
                <h4>Testing Instructions</h4>
                <div >   
                  <p>
                    Note: this is a click-through prototype that does not have full functionality. 
                    If you click somewhere on a page that doesn’t lead anywhere, the clickable buttons will be highlighted in blue.
                  </p>
                  <p>
                    For background on the app, Dr. Treat aims to be a tech enabled modern veterinary 
                    care company offering virtual and in-clinic services to pet parents. It aims to be 
                    data driven to offer highly personalized & preventative care for every pet. 
                  </p>
                  <p>
                    For this task, imagine you have three pet dogs, and you’d like to schedule an appointment 
                    for one of them, Clark. Imagine that while you are in this process, a veterinary 
                    emergency comes up, and you look to diagnose your dog through the app. Feel free 
                    to think aloud during your interaction with the prototype.
                  </p>
                  <p>
                    <ol>
                      <li>
                        Schedule an appointment for Clark through the “Your Pets” screen. 
                        Note that the header on the appointments page you reach should say “Clark’s Appointments”, not “All Pet Appointments”
                      </li>
                      <li>
                        You realize there is an emergency with Clark and want to navigate to the emergency screen. Please navigate to the appropriate page.
                      </li>
                      <li>
                        You realize you would like to conduct an At Home Diagnosis. Please navigate to the appropriate page.
                      </li>
                      <li>
                        You decide you want to chat with a Dr. Treat representative. Navigate to the chat screen to start a conversation.
                      </li>
                    </ol>
                  </p>      
              </div>
              <h4>Post-Test Questions</h4>
              <p>
              <ol>
                <li>
                  When completing the tasks, did you find that you were unable to complete any on your first try? 
                  If so, which task(s) caused issues and what incorrect steps did you take?
                </li>
                <li>
                  Which screen was most memorable to you?
                </li>
                <li>
                  Do you have any general feedback/suggestions for improving this application?
                </li>
              </ol>
            </p>
            <hr style={{marginTop: '20px'}}></hr>
            <h2>User Testing Videos</h2>
            <div style={{display: 'grid', gap: '1em', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center'}}>
            <a style={{color: 'white', textDecoration: 'none'}} href="https://app.usertesting.com/v/7382e1e5-0ab4-4ed2-98be-e095ca814652?encrypted_video_handle=8eafa704-aca5-477d-9b45-2565ba1601bd#!/notes&shared_via=link"
                target="_blank">
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div>User 1</div>
                <img id="avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
              </div>
            </a>
            <a style={{color: 'white', textDecoration: 'none'}} href="https://app.usertesting.com/v/8496bd95-92fa-41de-892f-e44b5fd39a71?encrypted_video_handle=56d9a253-1b39-4876-af1a-bb76ef66cc4f#!/notes&shared_via=link"
                target="_blank">
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div>User 2</div>
                <img id="avatar" src="https://www.w3schools.com/howto/img_avatar2.png" />
              </div>
            </a>
            <a style={{color: 'white', textDecoration: 'none'}} href="https://app.usertesting.com/v/b195cc70-b5b1-43ed-ba24-c0db746d4365?encrypted_video_handle=0fe0dc64-a295-40f2-9c97-94ffe557c920#!/notes&shared_via=link"
              target="_blank">
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div>User 3</div>
                <img id="avatar" src="https://www.w3schools.com/w3images/avatar6.png" />
              </div>
            </a>
            </div>
            <h4>Analysis of Results</h4>
            <p>Generally, our users thought the app was straightforward to use. The videos reveal, however, that we could have been a little more specific with our first task. 
              As the functionality of the buttons to add specific appointments is missing, instead of asking the user to “schedule an appointment,” 
               we should have made the instruction clearer by asking users to “navigate to the schedule appointments screen.”</p>
            <p>Some of the main feedback as well as the final thoughts of each user is provided below:  </p>
            <div style={{display: 'grid', gap: '1em', gridTemplateColumns: '1fr 1fr 1fr', justifyItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div style={{color: 'cornflowerblue', fontWeight: 'bold', fontSize: '1.1em'}}>User 1</div>
                <div>"Super well designed app, everythihg was super straightforward, very easy and 
                  self explanatory.
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div style={{color: 'green', fontWeight: 'bold', fontSize: '1.1em'}}>User 2</div>
                <div>A little unclear what the emergency icon was at first.</div>
                <div>"Overall I like the feel of this site, it feels playful and I like the colors. I think that it works 
                  for being appealing especially for what the app is. Maybe when you start the app you could have a little run-through
                  tutorial that explains where things are."
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em'}}>
                <div style={{color: 'orange', fontWeight: 'bold', fontSize: '1.1em'}}>User 3</div>
                <div>The red stands out really well for the emergency button.</div>
                <div>"No final comments, super easy to navigate, thanks so much."</div>
              </div>
            </div>
            <hr style={{marginTop: '20px'}}></hr>
            <h2>Contacting the Startup </h2>
            <p>Finally here is the email drafted to Dr. Treat, as well as their response!</p>
            <div style={{display: 'flex', flexDirection: 'column' , gap: '2em', justifyContent: 'center', alignItems:'center'}}>
              <img id="dr-treat-email" alt="Dr Treat Email" src="drTreatEmail.png"></img>
              <img id="dr-treat-response" alt="Dr Treat Email Response" src="drTreatResponse.png"></img>
            </div>

              <div></div>
                <h2>Reflection</h2>
                <p>This project was a great exercise in creating a design with the interests of a company/brand, in this 
                  case, the Dr. Treat startup, in mind. The detailed and thorough design process we followed allowed us to 
                  experiment with and test several iterations of our website's design, helping us ultimately choose the most 
                  optimal layout and content for the app. The next step might be to use the Figma prototypes to build the app 
                  itself, and to present that finished product to Dr. Treat once again!
                </p>
            </div>
        </div>
        <NavigationButtons name="Iterative"/>
      </div>
    </div>
  )
}

export default Iterative;