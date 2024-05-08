import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import HomePage from './pages/home-page'
import RecipePage from './pages/recipe-page'
import NavBar from './components/ui/nav-bar'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/recipes/:recipeId" element={<RecipePage/>}/>
      <Route path="*" element={<p>This page doesn't exist</p>}/>
    </Routes>
      <Button>Hi</Button>
    </>
  )
}

export default App
