import React from 'react'
import './App.css';
import LangingPage from './stores/pages/LangingPage';
import { Route, Routes} from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchesPage from './stores/pages/WatchesPage';
import MensPage from './stores/pages/MensPage';
import WomenPage from './stores/pages/WomenPage';
import FurniturePage from './stores/pages/FurniturePage';
import AcPage from './stores/pages/AcPage';
import KitchenPage from './stores/pages/KitchenPage';
import BooksPage from './stores/pages/BooksPage';
import FridgesPage from './stores/pages/FridgesPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import TvsPage from './stores/pages/TvsPage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LangingPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path='/computers' element={<ComputerPage />} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/Mens' element={<MensPage />} />
        <Route path='/womans' element={<WomenPage />} />
        <Route path='/furnitures' element={<FurniturePage />} />
        <Route path='/acs' element={<AcPage />} />
        <Route path='/kitchens' element={<KitchenPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/fridges' element={<FridgesPage />} />
        <Route path='/speakers' element={<SpeakersPage />} />
        <Route path='/tvs' element={<TvsPage />} />
        <Route path='/cart' element={<UserCart />} />
      </Routes>
    </div>
  )
}

export default App
