import './AboutMe.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="about-me-wrapper">
      <div style={{marginTop: '0.5em'}} className='intro'>Welcome to my portfolio!</div>
      <div className="student-intro">
        </div>
      <p style={{color: 'white'}}><span >Here is a collection of some of the projects I've been working on this past semester. </span></p>
      
      <p>Three of the projects, <Link style={{color:'cornflowerblue', textDecoration: 'none'}} to="/development">Development</Link>, 
          <Link style={{color:'cornflowerblue', textDecoration: 'none'}}to='/responsive'> Responsive Redesign</Link>, and <Link style={{color:'cornflowerblue', textDecoration: 'none'}} to='/iterative'>Iterative Design and Evaluation</Link> are front-end focused and showcase
           useful design practices in developing clean interactive interfaces. The <Link style={{color:'cornflowerblue', textDecoration: 'none'}} to="/myMaps">MyMaps</Link> project is a full-stack MERN application that 
           required thoughtful design on both the front and backend and that better expresses my general programming strengths and interests.
      </p>
      <p>Besides coding, here are some of my other favorite interests! </p> 
      <ul>
        <li>Playing and watching soccer</li>
        <li>Making music using music production software</li>
        <li>Learning languages</li>
      </ul>
        <hr></hr>
      <div style={{display: 'flex', flexDirection: 'column', margin: '1em 0'}}>
        <div>johndoe@gmail.com</div>
        <div>123-456-7890</div>
        <div>Fake Address 123, Providence RI</div>
        <div></div>
      </div>
      <div class="my-links">
        <Tooltip title="Linkedin">
          <div className="socials-icon-wrapper">
            <LinkedInIcon style={{color: 'cornflowerblue'}} fontSize='large'/>
          </div>        
        </Tooltip>
        <Tooltip title="Github">
          <div className="socials-icon-wrapper">
            <GitHubIcon style={{color: 'mediumpurple'}} fontSize='large'/>
          </div>
        </Tooltip>
        <Tooltip title="Twitter">
          <div className="socials-icon-wrapper">
            <TwitterIcon style={{color: 'cornflowerblue'}} fontSize='large'/>
          </div>     
        </Tooltip>
        
        
        

      </div>

    </div>
  )
}

export default AboutMe;