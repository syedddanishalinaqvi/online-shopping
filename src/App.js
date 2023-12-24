import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './Components/Context';

function App() {
  const [item, setItem] = useState([]);

  const handleCart =(e, element,id) => {
    e.preventDefault();
    let found=item.findIndex((ele)=>ele.id===element.id);
    if(found===-1){
      setItem([...item,element]);
    }
    else{
      return handleIncrease(id);
    }
  }

  const handleIncrease = (id) => {
    let updatedCart = item.map((element) => {
      if (element.id === id) {
        let increaseValue = element.product + 1;
        return { ...element, product: increaseValue };
      }
      else {
        return element
      }
    })
    setItem(updatedCart)
  }

  const handleDecrease = (id) => {
    let updatedCart = item.map((element) => {
      if (element.id === id && element.product > 1) {
        let decreasedValue = element.product - 1;
        return { ...element, product: decreasedValue }
      }
      else {
        return element;
      }
    })
    setItem(updatedCart)
  }
  const handleRemove = (e,id) => {
    e.preventDefault();
    const arr = item.filter((item) => item.id !== id);
    setItem(arr);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={item}>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart handleRemove={handleRemove} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />} />
            <Route path="/" element={<Home handleCart={handleCart} />} />
          </Routes>
          <Info />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
