import './ProjectSidebar.css'
import { Tooltip } from '@mui/material'

const ProjectSidebar = ({name, description}) => {
  return (
    <div className="project-sidebar-wrapper">
      <div className="project-sidebar-title">{name}</div>
      <div className="project-sidebar-description">
        {description}
      </div>
      <div className='tools-used'>Tools Used:</div>
      <div className='tools-wrapper'>
        {name == "MyMaps Hypertext Application" &&
            <Tooltip title="Mongo DB, Express, React, NodeJs">
                <img style={{marginBottom: '10px', borderRadius: '6px'}} src="mern-stack.png" width="207px" height="75px"></img>
            </Tooltip>
        }
        {name == "Development" && 
          <div>
            <Tooltip title="React">
              <img src="reactIcon.png" width="48px" height="48px"></img>
            </Tooltip>
          </div>
        }
        <div style={{display: 'flex', gap: '10px'}}>
          <div>   
            {name == "Development" || name == "MyMaps Hypertext Application" && 
              <Tooltip title="Javascript">
                <img src="jsIcon.png" width="48px" height="48px"></img>
              </Tooltip>
            }     
              <Tooltip title="HTML">
                <img src="htmlIcon.png" width="48px" height="48px"></img>
              </Tooltip>
              <Tooltip title="CSS">
                <img src="cssIcon.png" width="48px" height="48px"></img> 
              </Tooltip>      
            </div>      
        </div>
        {name === "Development" || name=== "MyMaps Hypertext Application" && 
          <div style={{display: 'flex', gap: '10px'}}>
            <Tooltip title="MaterialUI">
              <img src="../muiIcon.png" width="48px" height="48px"></img>
            </Tooltip>
            {name === "MyMaps Hypertext Application" && 
              <Tooltip title="Chakra Ui">
                <img src="../chakra-ui.png" width="48px" height="48px"></img>
              </Tooltip>
              
            }
          </div>
        }
         
      </div>
     
    </div>
  )
}
export default ProjectSidebar;