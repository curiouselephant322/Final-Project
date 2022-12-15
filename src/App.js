import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Header from './Header'
import Main from './Main'
import {Routes, Route} from 'react-router-dom'
import MyMaps from './MyMaps'
import Development from './Development';
import Iterative from './Iterative'
import Responsive from './Responsive';
import {BrowserRouter as Router} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'


function App() {

  return (
    <RecoilRoot>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/myMaps' element={<MyMaps/>}/>
      <Route path='/development' element={<Development/>}/>
      <Route path='/iterative' element={<Iterative/>}/>
      <Route path='/responsive' element={<Responsive/>}/>
    </Routes>
    </Router>
    </RecoilRoot>
   


    // <div className="App">
    //   <div>
    //     <Header/>
    //     <Main/>
    //   </div>
    // </div>
  );
}

export default App;
