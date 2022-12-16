import './Main.css'
import  AboutMe  from './AboutMe'
import Card from './Card'


const itemData = [
  {
    img: 'MyMaps.png',
    title: 'MyMaps Application',
    description: 'A powerful route/journey logging application with hypertext features, based around map nodes.',
    class: 'myMaps',
    id: 0,
    link: '/myMaps'
  },
  {
    img: 'Development.png',
    title: 'Development',
    description: 'Building an interactive and responsive interface in React that gives information about the teams in the UEFA Champions league.',
    class: 'development',
    id: 1,
    link: '/development'
  },
  {
    img:  'Responsive.png',
    title: 'Responsive Redesign',
    description: 'Redesigning a poorly made website as a responsive site using a design workflow process. ',
    class: 'responsive',
    id: 2,
    link: '/responsive'
  },
  {
    img: 'Iterative.png',
    title: 'Iterative Design and Evaluation',
    description: 'Designing, building and testing design prototypes for a startup concept.',
    class: 'iterative',
    id: 3,
    link: '/iterative'
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