import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Info from './Components/Info';
import ItemList from './Components/ItemList';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Context from './Components/Context';

function App() {
  const[item,setItem]=useState([]);

  const handleCart=(e,element)=>{
    e.preventDefault();
    setItem([...item,element]);
    console.log(item);
}
  return (
    <div className="App">
      <BrowserRouter>
      <Context.Provider value={item}>
      <Navbar/>
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Home handleCart={handleCart}/>}/>
      </Routes>
            <Info />
            </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
