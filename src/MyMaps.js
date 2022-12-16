import Header from './Header'
import ProjectSidebar from './ProjectSidebar'
import NavigationButtons from './NavigationButtons'
import 'animate.css';
import {RecoilRoute,  setRecoilState, useSetRecoilState, useRecoilValue} from 'recoil'
import { animationState } from './atoms.js'
import 'animate.css'
import { useEffect } from 'react';
import './MyMaps.css'



const MyMaps = () => {

  const animationStateVal = useRecoilValue(animationState)

  var className = 'animated__backInLeft' 

  useEffect(()=> {
    className = animationStateVal == 0 ? 'animated__backInRight' : 'animated__backInLeft'
  }, [animationStateVal])
  

  const description= "A powerful route/journey logging application with hypertext features based around map nodes."


  return (
   
    <div>
      <Header/>
      <div id="br"></div>
      <div id="project-wrapper" className='animate__animated animate__backInLeft'>
        <ProjectSidebar name="MyMaps Hypertext Application" description={description}/>
        <div className="project-content-wrapper">
            <div className="project-right-wrapper">
              <h2>Goal</h2>
              <p>The goal of this project was to build a hypertext/hypermedia MERN stack application for a particular (or a particular set of) use case(s). </p>
              <h2>Background</h2>
                <p>We spent much of the semester building and extending a web application where users could add text, image, and folder nodes. 
                  This site is a hypertext/hypermedia application in the sense that it supports bi-directional linking between all types of content. 
                  MyMaps uses on this existing node structure to build a site that revolves around a map node.
                </p>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img id="my-maps-main-img" src='MyMaps.png'></img>
              </div>
              
              <div>
                <h2>Overview</h2>
                <p></p>
                <p>My Maps is a hypermedia app where users can upload an image of a map of their choosing (either a real-world or fantasy map),
                   and then add pins to specific locations on the map. Each of these pins are a collection of one or more nodes that are relevant 
                   to that location. For example, the nodes could include pictures, stories, journal entries, and other records that are specific to 
                   the pinned location. The pins on the map can also be connected through a directed trail called Route, with a customizable visual 
                   representation of the Route overlaid on the map view.
                </p>
                <p><i>In the image above, "Road Trip" is the map node, "Indianapolis" is one of the map's pins, and 
                  "Gary, Indiana" is a text node associated with the pin</i></p>
                  <p>
                  When a user opens one of the maps, they will see all of the current pins on the given map, along with a text box below the map for 
                  quick notes and comments. Clicking one of the pins opens a side menu that displays a list of each of the nodes that are a part of the pin’s 
                  collection. Each of these nodes can be text, images, or folders, and the pin collection view includes a button 
                  to create a new node in the collection. Each of these nodes includes the bi-directional linking functionality that allows them to link to 
                  any other node.
                  </p>
                  <h2>Use Cases</h2>
                  <p>In creating this application, we had two particular use cases in mind: </p>
                  <h4>1: A tourist logging their journey</h4>
                  <p>One use case would be a traveller logging their route/journey through a given area -- for example, a tourist visiting Canada could 
                    upload an image of a map of Canada and place pins at each of the locations that they visited during their trip. If the traveler visited Toronto,
                    they could place a pin on Toronto to hold a collection of nodes for different locations in Toronto (e.g. a node for a restaurant that they liked, a
                    museum they enjoyed). If users find similarities or connections between different nodes, they may also link between content to enhance their node 
                    collection.
                  </p>
                  <h4>2: For fantasy world afficionados</h4>
                  <p>Another use case would be for the fantasy fanatic. This app would provide the opportunity to upload their favorite map from a piece of media they 
                    enjoy or upload their own drawings as maps to trace the journey of their favorite characters.</p>
                    <p>For example, a reader who enjoys <i>Lord of the Rings</i>  and wants to plot Frodo's path from the Shire to Mt. Doom could 
                    upload an image of a map of Middle Earth and place pins along the route to indicate significant plot points. When clicking a pin, the user 
                    could write about what happened at that location in a text node, or upload screencaptures of the movie.</p>
                  <h2>Video Demo</h2>
                  <p>The website has not been publicly deployed yet; the video below shows a demo of the application being used, however, and demonstrates some of the key
                    features mentioned above. </p>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/57a9UI-YDN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                <h2>Reflection</h2>
                <p>This project helped give me a great understanding of each component of the MERN stack (MongoDB, Express, React, NodeJs)
                  and the process behind designing and building a full-stack web application. Thinking about the use cases defined above, I believe 
                   we managed to build an app that someone would consider using, so we can say we met our goal. What's great is that this application's
                   robust structure is such that it can easily be further extended to support more useful features; any suggestions through my 
                   contacts are always appreciated!
                </p>
              </div>
            </div>
        </div>
        <NavigationButtons name="MyMaps"/>
      </div>
    </div>

  )
}

export default MyMaps;