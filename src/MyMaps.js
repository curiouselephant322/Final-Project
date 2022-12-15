import Header from './Header'
import ProjectSidebar from './ProjectSidebar'
import NavigationButtons from './NavigationButtons'
import 'animate.css';
import {RecoilRoute,  setRecoilState, useSetRecoilState, useRecoilValue} from 'recoil'
import { animationState } from './atoms.js'
import 'animate.css';



const MyMaps = () => {

  const animationStateVal = useRecoilValue(animationState)
  const className = animationStateVal == 0 ? 'animated__backInRight' : 'animated__backInLeft'

  const description= "set description"

 

  return (
   
    <div>
      <Header/>
      <br/>
      <div id="project-wrapper" className={`animate__animated ${className}`}>
        <ProjectSidebar name="MyMaps Hypertext Application" description={description}/>
        <div className="project-content-wrapper">
            <div className="project-right-wrapper">
              <img src='MyMaps.png' align='right'></img>
              <div>
              <h2>Goal</h2>
                <p>The goal of this project was to develop an interactive interface for a list of data, using state to implement 
                filtering, sorting, and aggregation features. </p>
                <h2>Background</h2>
                <p>I created a responsive app geared toward afficionados of the UEFA Champions League, with information about the 
                  participating teams and their groups. Teams can be grouped by country or by champions league group, and a number of 
                  filtering options are present to narrow down the displayed teams. Teams can also be added to your favorites for 
                  future reference. A standings view, implemented using an api call, is also available to better visualize the 
                  current group rankings.
                </p>
                <h2>Reflection</h2>
                <p>This project helped enforced my understanding of the concept of State in React. I became more familiar with the 
                  MUI framework and more comfortable with media queries as I worked to make the site responsive.
                </p>
              </div>
              <div className="dev-link" style={{marginTop: '10px'}}>
                <a href="https://curiouselephant322.github.io/development/" style={{color: 'cornflowerblue'}}>See the website!</a>
                </div> 
            </div>
        </div>
        <NavigationButtons name="MyMaps"/>
      </div>
    </div>

  )
}

export default MyMaps;