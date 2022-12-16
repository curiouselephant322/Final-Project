import './Header.css'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <div className="header-wrapper">
      <div className="student-wrapper">
        <div className="student-name">
          John Doe
        </div>
        <div className="student-intro" style={{fontSize: '0.9em'}}>
          <span>A </span><span style={{color: 'mediumpurple'}}>4th year </span><span style={{color: 'cornflowerblue'}}>student </span><span> at</span><span style={{color: 'mediumpurple'}}> Brown University</span>
          <span> pursuing</span><span style={{color: 'cornflowerblue'}}> full-stack development.</span>
        </div>
        
      </div>
      <div style={{marginRight: '30px'}}>
        {location.pathname != '/' &&
          <Link to='/'>
          <img id="home-button" src='homeIcon.png' width="40" height="40"/>
          </Link>
        }
        </div>
    </div>
  )

}

export default Header;