
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom"

import HomePage from "./components/Homepage"

import CustomizationPage from './components/CaseCustomization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/case" Component={CustomizationPage}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;