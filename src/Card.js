import { cardActionAreaClasses } from '@mui/material'
import './Card.css'
import React, { useEffect, useState } from 'react'
import { SettingsInputAntennaTwoTone } from '@mui/icons-material'
import AboutMe from './AboutMe'
import { Link } from 'react-router-dom'

const Card = ({project}) => {

  const [lastFlippedIndex, setLastFlippedIndex] = useState(null)
  const [isFlipped, setIsFlipped] = useState([false, false, false, false])



  const handleClick = (index) => {
    let flipped = isFlipped.slice()
    for (let i=0; i<flipped.length; i++) {
      console.log('hi')
      if (i == index) {
        console.log('he')
        flipped[i] = !flipped[i]
      } else flipped[i] = false
    }
    console.log(flipped)
    setIsFlipped(flipped)
  }

  const handleMoreInfoClick = (e) => {
      e.cancelBubble = true
      e.stopPropagation()
  }

  return (
   
    <div className={`card-wrapper ${project.class}`}>
       <Link to={project.link}>
        <div className="card-image-wrapper">
          <img
            src={`${project.img}?w=248&fit=crop&auto=format`}
            srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={project.img}
            loading="lazy"
          />
          <div className="card-info-wrapper">
            <div className="card-hover-header" style={{textAlign: 'left'}}>
              <h2>{project.title}</h2>
            </div>
            <div className="card-hover-description">
              <p>{project.description}</p>
            </div>
        </div>
        </div>
        </Link>
    </div>

  )
}

export default Card;