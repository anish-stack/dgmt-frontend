
import './App.css';

import Header from './components/header/Header';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Sorry from './components/SorryPage/Sorry';
import Graphics from './components/Graphics/Graphics';
import WebsiteDevelopment from './components/websiteDevelopment/WebsiteDevelopment';
import SocialMediaMarketing from './components/SocialMediaMarketing/SocialMediaMarketing';
import Seo from './components/seo/Seo';
import AppDev from './components/AppDevelopment/AppDev';
import Digital from './components/DigitalMarketing/Digital';
import Certificates from './components/Certificates/Certificates';
import { useEffect } from 'react';
// import WhatsappIcon from './components/whatsappIco?n/WhatsappIcon';


function App() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/*' element={<Sorry/>}></Route>
        <Route path='/Graphics-Designing' element={<Graphics />}/>
        <Route path='/Web-Development' element={<WebsiteDevelopment/>}/>
        <Route path='/Social-Media-Marketing' element={<SocialMediaMarketing />}/>
        <Route path='/Search-Engine-Optimization' element={<Seo/>}/>
        <Route path='/App-Development' element={<AppDev/>}/>
        <Route path='/Digital-Marketing' element={<Digital/>}/>
        <Route path='/Certificates' element={<Certificates/>}/>

        
        
      </Routes>
      {/* <WhatsappIcon /> */}
      <Footer />
    </BrowserRouter>

  );
}

export default App;

