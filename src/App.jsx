// import '/src/App.css'
// import '/src/components/ChocoCard.css'
import './App.css'
import './components/ChocoCard.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import ChocoCard from './components/ChocoCard'



const chocoboList = [
  {
    id: 1,
    imgSrc: '/public/jaune.png',
    choconame: "Chocobo des plaines ", 
    chococolor: "#e7bd3c",
    info: "Se déplace librement sur les plaines, peut être Grand, Magnifique ... ",
    have: "Acquisition:Capture/accouplement quelconque",
  },
  {
    id: 2,
    imgSrc: './public/vert.png',
    choconame: "Chocobo des montagnes",
    chococolor:"#376028",
    info: "Se déplace librement sur les plaines, les montagnes et les terrains rocheux.",
    have:" Acquisition: 2 Chocobos Magnifiques + Noix de Caroube ",
  },
  {
    id: 3,
    imgSrc: '/public/bleuciel.png',
    chococolor:"#6482de",
    choconame: "Chocobo des eaux claires", 
    info: "Se déplace librement sur les plaines et sur les eaux peu profondes", 
    have: "Acquisition: 2 Chocobos Magnifiques + Noix de Caroube ",
  },
  {
    id: 4,
    imgSrc: '/public//bleu_fonce.png',
    chococolor:"#091b65",
    choconame: "Chocobo des mer ", 
    info: "Se déplace librement sur les plaines ainsi que sur les mers et eaux claires", 
    have:"Acquisition: 2 Chocobos Magnifiques + Noix de Caroube ",
  },
  {
    id: 5,
    imgSrc: '/public/noir.png',
    chococolor:"#141414",
    choconame: "Chocobo noir", 
    info: "Se déplace sur les plaines, montagne, terrains rocheux, mer et eaux peu profondes", 
    have: "Acquisition: Chocobo vert + bleu + Noix de Caroube",
  },
  {
    id:6,
    imgSrc: '/public//dore.png',
    chococolor:"#ffef67",
    choconame: "Chocobo doré", 
    info: "Le chocobot ultime il se déplace librement nimporte où!!!!! ",
    have: "Acquisition: Chocobo noir + Grand chocobo + Noix de Zeio",
  },
  
]

const  App= () => {
  
  return (
    <div className='body'>
      <nav className='HeadCss'>
        <Header/>
        
      </nav>
      <div className='WelcomeCss'>
        <Welcome/>
      </div>
      <div className='cssCard'>
        <ChocoCard chocobo = {chocoboList[0]}/>
        <ChocoCard chocobo = {chocoboList[1]}/>
        <ChocoCard chocobo = {chocoboList[2]}/>
        <ChocoCard chocobo = {chocoboList[3]}/>
        <ChocoCard chocobo = {chocoboList[4]}/>
        <ChocoCard chocobo = {chocoboList[5]}/>

        </div>
    </div>
  )
}

export default App
