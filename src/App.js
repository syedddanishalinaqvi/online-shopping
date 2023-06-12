import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Context from './Components/Context';

function App() {
  const[item,setItem]=useState([]);
  const handleCart=(e,element)=>{
    e.preventDefault();
    setItem([...item,element]);
}
const handleRemove=(e,id)=>{
  e.preventDefault();
  const arr=item.filter((item)=>item.id!==id)
  setItem(arr);
}
  return (
    <div className="App">
      <BrowserRouter>
      <Context.Provider value={item}>
      <Navbar/>
      <Routes>
        <Route path="/cart" element={<Cart removeElement={handleRemove} />}/>
        <Route path="/" element={<Home handleCart={handleCart}/>}/>
      </Routes>
            <Info />
            </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
