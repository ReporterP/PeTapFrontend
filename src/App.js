import React, {useState, useEffect} from 'react';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-sweet-progress/lib/style.css";
import './App.scss';
import AboutUs from './pages/AboutUs';
import MainPage from './pages/mainpage';
import MainMenu from "./components/MainMenu"
import Preloader from "./components/Preloader"
import Footer from './components/footer';
import Upload from './pages/UploadPage';
import Statistic from './pages/statistic';
import Game from "./pages/game"


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{setLoading(false)}, 2500)
  }, [])


  return (
    <div>
      {loading ?
        (<Preloader/>)
        :
        (
        <div>
          <MainMenu/>
          <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route path="/about"  element={<AboutUs/>}/>
            <Route path="/upload"  element={<Upload/>}/>
            <Route path="/statistic" element={<Statistic/>}/>
            <Route path="/game" element={<Game/>}/>
          </Routes>
          <Footer/>
        </div>)}
    </div>
  );
};


export default App;
