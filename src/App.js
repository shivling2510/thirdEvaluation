import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { ProductPage } from './Components/ProductPage';
import { Register } from './Components/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/register'  element={<Register />}/>
     
    </Routes>

    </div>
  );
}

export default App;
