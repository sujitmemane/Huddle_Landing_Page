

import './App.css'
import Navbar from './componets/navbar/Navbar'
import Hero from './componets/hero/Hero'
import Numbers from './componets/numbers/Numbers'
import MainContent from './componets/main-content/MainContent'
import CTA from './componets/cta/CTA'
import Footer from './componets/footer/Footer'
function App() {


  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Numbers/>
     <MainContent/>
     <CTA/>
     <Footer/>
    </div>
  )
}

export default App
