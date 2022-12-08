import './Home.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: '/Development.png',
    title: 'Development Project',
    description: 'An interactive web application yielding that gives information about the teams in the UEFA Champions league',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img:  '/Responsive.png',
    title: 'Responsive Redesign',
    description: 'A project with the goal of responsively redesigning a poorly-made website for the better.'
  },
  {
    img: '/DrTreat.png',
    title: 'Iterative Design and Evaluation',
    description: 'Designing an app for a new startup'
  },
  {
    img: '/Hypermedia.png',
    title: 'Hypertext Hypermedia Application',
    description: 'A note-taking application with hypertext and hypermedia features',
    cols: 2,
  },
]

function Home () {
  return (
    <div className="content-container">
      <div id="home" className="container home-container">
        <div >
          <img className="avatar-image" alt="Zaul Tavangar" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
        </div>
        <div className="intro-container">
          <span className='name-intro'>Hi I'm <b style={{color: 'purple'}}>Zaul Tavangar</b></span>
          <p>I am a 4th year computer science student at Brown Univeristy...</p>
          <div className='button-links-container'>
            <Button variant="outlined" style={{
              backgroundColor: 'purple',
              color: 'white',
              fontSize: '15px',
              padding: '5px 10px',
              borderRadius: '2px !important'
            }}>
                Resume
            </Button>
            <IconButton style={{
              backgroundColor: "white",
              borderRadius: '3px',
              border: '1px solid purple',
              padding: "5px 5px"
            }}>
              <LinkedInIcon/>
            </IconButton>
            <IconButton style={{
              backgroundColor: "white",
              borderRadius: '3px',
              border: '1px solid purple',
              padding: "5px 5px"
            }}>
              <GitHubIcon/>
            </IconButton>
          </div>
        </div>
      </div>
      <div id="about-me" className="container info-container aboutme-container">
        <h1>About Me</h1>
        <div className='about-me-container' style={{margin: '0 auto',   borderRadius: '15px 15px'}}>
          <p>I'm a full stack developer with a background in computer architecture and design. More info about my background and my other interesets here...</p>
        </div>
      </div>
      <div id="projects" className="container info-container projects-container">
        <h1>Projects</h1>
        <div className="project-grid" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="project dev-project" >
            <ImageList sx={{ width: 800, height: 800 }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
            
          </ImageList>
          </div>
        </div>

      </div>
      <div id="skills" className="container info-container skills-container">
        <h1>Skills</h1>
        <div>
          <p>List of computer science related skills...</p>
        </div>
      </div>
      <div id="contact" className="container info-container contact-container">
        <h1>Contact</h1>
        <p>Contact information...</p>
      </div>
    </div>
      
  )
}
export default Home;