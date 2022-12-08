// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Work from './component/Work';
import Works from './component/Works';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/work' element={<Works></Works>}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
