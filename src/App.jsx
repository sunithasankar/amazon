import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import KichenPage from './stores/pages/KitchenPage'
import Mobilepage from './stores/pages/Mobilepage'
import Watchpage from './stores/pages/Watchpage'
import Computerpage from './stores/pages/Computerpage'
import Furniturepage from './stores/pages/Furniturepage'
import MenfashionPage from './stores/pages/MenfashionPage'
import WomenfashionPage from './stores/pages/WomenfashionPage'
import Acpage from './stores/pages/Acpage'
import Tvpage from './stores/pages/Tvpage'
import Fridgepage from './stores/pages/Fridgepage'
import Bookpage from './stores/pages/Bookpage'
import Mobilessingle from './stores/singlepage/Mobilessingle'
import Acsingle from './stores/singlepage/Acsingle'
import Booksingle from './stores/singlepage/Booksingle'
import Watchsingle from './stores/singlepage/Watchsingle'
import Computersingle from './stores/singlepage/Computersingle'
import Menfashionsingle from './stores/singlepage/Menfashionsingle'
import Womenfashionsingle from './stores/singlepage/Womenfashionsingle'
import Kitchensingle from './stores/singlepage/Kichensingle'
import Furnituresingle from './stores/singlepage/Furnituresingle'
import Tvsingle from './stores/singlepage/Tvsingle'
import Fridgesingle from './stores/singlepage/Fridgesingle'

function App() {
 return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/mobiles' element={<Mobilepage/>}/>
      <Route path='/watches' element={<Watchpage/>}/>
      <Route path='/computers' element={<Computerpage/>}/>
      <Route path='/menfashion' element={<MenfashionPage/>}/>
      <Route path='/womenfashion' element={<WomenfashionPage/>}/>
      <Route path='/kitchen' element={<KichenPage/>}/>
      <Route path='/ac' element={<Acpage/>}/>
      <Route path='/tv' element={<Tvpage/>}/>
      <Route path='/furniture' element={<Furniturepage/>}/> 
      <Route path='/fridges' element={<Fridgepage/>}/> 
      <Route path='/books' element={<Bookpage/>}/>
        <Route path='/mobiles/:id' element={<Mobilessingle/>} />
        <Route path='/ac/:id' element={<Acsingle/>} />
        <Route path='/book/:id' element={<Booksingle/>} />
        <Route path='/watch/:id' element={<Watchsingle/>} />
        <Route path='/computer/:id' element={<Computersingle/>} />
        <Route path='/men/:id' element={<Menfashionsingle/>} />
        <Route path='/women/:id' element={<Womenfashionsingle/>} />
        <Route path='/kitchen/:id' element={<Kitchensingle/>} />
        <Route path='/furniture/:id' element={<Furnituresingle/>} />
        <Route path='/tv/:id' element={<Tvsingle/>} />
        <Route path='/fridge/:id' element={<Fridgesingle/>} />
    </Routes>
    </>
  )
}

export default App
