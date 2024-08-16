import React from 'react'
import './App.css';
import LangingPage from './stores/pages/LangingPage';
import { Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LangingPage />} />
      </Routes>
    </div>
  )
}

export default App
