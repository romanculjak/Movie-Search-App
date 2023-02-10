
import SearchPage from './pages/SearchPage';
import PlotPage from './pages/PlotPage'
import { Routes, Route } from "react-router-dom"


function App() {


  return (  
    <>
      <Routes>
        <Route path="/*" element={ <SearchPage/> } />
        <Route path="/plot/:id" element={ <PlotPage/> } />
      </Routes>
    </>
  )
}

export default App
