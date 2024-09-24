import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import KichenPage from './stores/pages/KichenPage'
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
    </Routes>
    </>
  )
}

export default App
