import './Header.css'


const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="student-wrapper">
        <div className="student-name">
          John Doe
        </div>
        <div className="student-intro">
          <span>A </span><span style={{color: 'mediumpurple'}}>4th year </span><span style={{color: 'cornflowerblue'}}>student </span><span> at</span><span style={{color: 'mediumpurple'}}> Brown University</span>
          <span> pursuing</span><span style={{color: 'cornflowerblue'}}> full-stack development.</span>
        </div>
      </div>
    </div>
  )

}

export default Header;