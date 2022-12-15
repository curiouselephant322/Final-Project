import './NavigationButtons.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton, Button } from '@mui/material';
import {Link} from 'react-router-dom'
import {animationState} from './atoms.js'
import {setRecoilState, useSetRecoilState} from 'recoil'


const NavigationButtons = ({name}) => {

  const setAnimationState = useSetRecoilState(animationState)
  
  const handleNavigationClick = (e, val) => {
      setAnimationState(val)
  }


  return (
    <div className="navigation-button-wrapper">
       {name == "MyMaps" &&
      <>
      <div onClick={(e)=> handleNavigationClick(e, 0)}>
        <Link to='/iterative'> <NavigateBeforeIcon color="primary"/> </Link>
      </div>
      <div onClick={(e)=> handleNavigationClick(e, 1)}>
        <Link to='/development'> <NavigateNextIcon color="primary"/> </Link>
      </div>
     </>
      }
      {name == "Development" && 
        <>
        <div onClick={(e)=> handleNavigationClick(e, 0)}>
          <Link to='/myMaps'> <NavigateBeforeIcon color="primary"/> </Link>
        </div>
        <div onClick={(e)=> handleNavigationClick(e, 1)}>
          <Link to='/responsive'> <NavigateNextIcon color="primary"/> </Link>
        </div>
         
          
        </>
      }
      {name == "Responsive" && 
        <>
        <div onClick={(e)=> handleNavigationClick(e, 0)}>
          <Link to='/development'> <NavigateBeforeIcon color="primary"/> </Link>
        </div>
        <div onClick={(e)=> handleNavigationClick(e, 1)}>
          <Link to='/iterative'> <NavigateNextIcon color="primary"/> </Link>
        </div>
          
        </>
      }
      {name == "Iterative" &&
      <>
      <div onClick={(e)=> handleNavigationClick(e, 0)}>
        <Link to='/responsive'> <NavigateBeforeIcon color="primary"/> </Link>
      </div>
      <div onClick={(e)=> handleNavigationClick(e, 1)}>
        <Link to='/myMaps'> <NavigateNextIcon color="primary"/> </Link>
      </div>
     </>
      }
     
    </div>
  )
}
export default NavigationButtons;