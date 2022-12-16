import Header from './Header'
import ProjectSidebar from './ProjectSidebar'
import './Development.css'
import NavigationButtons from './NavigationButtons'
import {setRecoilState, useSetRecoilState, useRecoilValue} from 'recoil'
import { animationState } from './atoms.js'
import 'animate.css'
import { Link } from 'react-router-dom'

const Development = () => {


  const animationStateVal = useRecoilValue(animationState)
  const className = animationStateVal == 0 ? 'animated__backInRight' : 'animated__backInLeft'

  const description = "Building an interactive and responsive interface in React"
  return (
 
    <div>
      <Header/>
      <div id="br"></div>
      <div id="project-wrapper" className='animate__animated animate__backInLeft'>
        <ProjectSidebar name="Development" description={description}/>
        <div className="project-content-wrapper">
          <div style={{width: '97%'}}>
            <div className="project-right-wrapper">
              <img className='dev-image' src='../Development.png' align='right'></img>
              <div className='dev-goal'>
              </div>
              <div className="dev-right-main">
              <h2>Goal and Importance</h2>
                <p>The purpose of this project was to develop an interactive interface for a list of data, using state to implement 
                filtering, sorting, and aggregation features. Although this project was built using a small set of data, its purpose was 
                to strengthen my understanding of state in React and to practice building a kind of interface that is very common to see online.</p>
                <h2>Background</h2>
                <p>I created a responsive app geared toward afficionados of the UEFA Champions League, with information about the 
                  participating teams and their groups. Teams can be grouped by country or by champions league group, and a number of 
                  filtering options are present to narrow down the displayed teams. Teams can also be added to your favorites for 
                  future reference. A standings view, implemented using an api call, is also available to better visualize the 
                  current group rankings.
                </p>
                <h2>Reflection</h2>
                <p>Although I was already familiar with the concept of state in React, as it is heavily used in some of my other projects such 
                  as <Link style={{color: "cornflowerblue"}} to='/myMaps'> MyMaps</Link>
                  , this project helped enforced my understanding of the concept of State in React. I also became more familiar with the 
                  MUI framework and more comfortable with media queries as I worked to make the site visually appealing and responsive.
                </p>
              </div>
              <div className="dev-link" style={{marginTop: '10px', marginBottom: '20px'}}>
                <a target="_blank" href="https://curiouselephant322.github.io/development/" style={{color: 'cornflowerblue'}}>See the website!</a>
                </div> 
            </div>
            </div>
        </div>
        <NavigationButtons name="Development"/>
      </div>
     
    </div>

  )
}

export default Development;