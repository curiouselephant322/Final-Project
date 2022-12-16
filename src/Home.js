import Header from './Header'
import Main from './Main'
import './Home.css'

function Home () {
  return (

    <div className="App">
    <div>
      <Header/>
      <div id="br"></div>
      <Main/>
    </div>
  </div>

    // <div className="content-container">
    //   <div id="home" className="container home-container">
    //     <div >
    //       <img className="avatar-image" alt="Zaul Tavangar" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
    //     </div>
    //     <div className="intro-container">
    //       <span className='name-intro'>Hi I'm <b style={{color: 'purple'}}>Zaul Tavangar</b></span>
    //       <p>I am a 4th year computer science student at Brown Univeristy...</p>
    //       <div className='button-links-container'>
    //         <Button variant="outlined" style={{
    //           backgroundColor: 'purple',
    //           color: 'white',
    //           fontSize: '15px',
    //           padding: '5px 10px',
    //           borderRadius: '2px !important'
    //         }}>
    //             Resume
    //         </Button>
    //         <IconButton style={{
    //           backgroundColor: "white",
    //           borderRadius: '3px',
    //           border: '1px solid purple',
    //           padding: "5px 5px"
    //         }}>
    //           <LinkedInIcon/>
    //         </IconButton>
    //         <IconButton style={{
    //           backgroundColor: "white",
    //           borderRadius: '3px',
    //           border: '1px solid purple',
    //           padding: "5px 5px"
    //         }}>
    //           <GitHubIcon/>
    //         </IconButton>
    //       </div>
    //     </div>
    //   </div>
    //   <div id="about-me" className="container info-container aboutme-container">
    //     <h1>About Me</h1>
    //     <div className='about-me-container' style={{margin: '0 auto',   borderRadius: '15px 15px'}}>
    //       <p>I'm a full stack developer with a background in computer architecture and design. More info about my background and my other interesets here...</p>
    //     </div>
    //   </div>
    //   <div id="projects" className="container info-container projects-container">
    //     <h1>Projects</h1>
    //     <div className="project-grid" style={{display: 'flex', justifyContent: 'center'}}>
    //       <div className="project dev-project" >
    //         <ImageList sx={{ width: 800, height: 800 }}>
    //         {itemData.map((item) => (
    //           <ImageListItem key={item.img}>
    //             <img
    //               src={`${item.img}?w=248&fit=crop&auto=format`}
    //               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //               alt={item.title}
    //               loading="lazy"
    //             />
    //             <ImageListItemBar
    //               title={item.title}
    //               subtitle={item.author}
    //               actionIcon={
    //                 <IconButton
    //                   sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
    //                   aria-label={`info about ${item.title}`}
    //                 >
    //                   <InfoIcon />
    //                 </IconButton>
    //               }
    //             />
    //           </ImageListItem>
    //         ))}
            
    //       </ImageList>
    //       </div>
    //     </div>

    //   </div>
    //   <div id="skills" className="container info-container skills-container">
    //     <h1>Skills</h1>
    //     <div>
    //       <p>List of computer science related skills...</p>
    //     </div>
    //   </div>
    //   <div id="contact" className="container info-container contact-container">
    //     <h1>Contact</h1>
    //     <p>Contact information...</p>
    //   </div>
    // </div>
      
  )
}
export default Home;