import './Navbar.css';
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Button,
  Link,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';



function Navbar() {
  // const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="navbar-container">
          <Link href="#home" className="navbar-home" underline="none">
            <Button startIcon={<HomeIcon/>} color="secondary" size="large">
              Home
            </Button>
          </Link>
          <Link href="#about-me" className="navbar-about" underline="none">
            <Button startIcon={<PersonIcon/>} color="secondary" size="large">
              About
            </Button>
          </Link>
          <Link href="#projects" className="navbar-project" underline="none">
            <Button startIcon={<WorkIcon/>} color="secondary" size="large">
              Projects
            </Button>
          </Link>
          <Link href="#skills" className="navbar-skills" underline="none">
            <Button startIcon={<CodeIcon/>} color="secondary" size="large">
              Skills
            </Button>
          </Link>
          <Link href="#contact" className="navbar-contact" underline="none">
            <Button startIcon={<ContactPageIcon/>} color="secondary" size="large">
              Contact
            </Button>
          </Link>
    </div>
  )
}

export default Navbar;

{/* <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)}>
<List>
 <ListItem onClick={() => setOpenDrawer(false)}>
    <ListItemText>
      <Link to="/">Home</Link>
    </ListItemText>
  </ListItem>
  <ListItem onClick={() => setOpenDrawer(false)}>
    <ListItemText>
      <Link to="/about">About</Link>
    </ListItemText>
  </ListItem>
  <ListItem onClick={() => setOpenDrawer(false)}>
    <ListItemText>
      <Link to="/contact">Contact</Link>
    </ListItemText>
  </ListItem>
  <ListItem onClick={() => setOpenDrawer(false)}>
    <ListItemText>
      <Link to="/about">Faq</Link>
    </ListItemText>
  </ListItem>
</List>
</Drawer> */}