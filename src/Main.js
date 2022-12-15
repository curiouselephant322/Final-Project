import './Main.css'
import  AboutMe  from './AboutMe'
import Card from './Card'


const itemData = [
  {
    img: '/MyMaps.png',
    title: 'MyMaps Application',
    description: 'A note-taking application with hypertext and hypermedia features',
    class: 'myMaps',
    id: 0,
  },
  {
    img: '/Development.png',
    title: 'Development Project',
    description: 'An interactive web application yielding that gives information about the teams in the UEFA Champions league',
    class: 'development',
    id: 1,
  },
  {
    img:  '/Responsive.png',
    title: 'Responsive Redesign',
    class: 'iterative',
    id: 2
  },
  {
    img: 'Iterative.png',
    title: 'Iterative Design and Evaluation',
    class: 'responsive',
    id: 3
  },

]

const Main = () => {
  return (
    <div className="main-wrapper">  
      <div className="main-grid">
        <AboutMe/>
        {itemData.map((project) => (
          <Card project={project}/>
        ))}
          <div data-text="Projects"className="helper">
            Projects 
          </div> 

      
        


    </div>
    </div>
  )
}

export default Main;