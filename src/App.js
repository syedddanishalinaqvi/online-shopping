import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Context from './Components/Context';
import Data from './Components/Data';
import Categories from './Components/Categories';
import MenuLeft from './Components/MenuLeft';

function App() {
  const [item, setItem] = useState([]);
  const [menuBar,setMenuBar]=useState("-50%");
  const [cartNumber,setCartNumber]=useState(0);
  const WomenData=Data.filter(item=>item.category==="women's clothing");
  const MenData=Data.filter(item=>item.category==="men's clothing");
  const Jwellery=Data.filter(item=>item.category==="jewelery");
  const Electronics=Data.filter(item=>item.category==="electronics");

  const handleCartNumber=()=>{
    let number=0;
    item.map((element)=>{
      return number+=element.product;
    });
    setCartNumber(number);
  }
  useEffect(()=>{
    handleCartNumber();
  })

  const handleMenu=()=>{
    if(menuBar==="-50%"){
      setMenuBar("50%");
    }
    else setMenuBar("-50%");
  }

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
          <MenuLeft menubar={menuBar}/>
          <Navbar handleMenu={handleMenu} value={menuBar} cartNumber={cartNumber}/>
          <Routes>
            <Route path="/cart" element={<Cart handleRemove={handleRemove} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />} />
            <Route path="/" element={<Home handleCart={handleCart} />} />
            <Route path="/men" element={<Categories handleCart={handleCart} data={MenData}/>} />
            <Route path="/women" element={<Categories handleCart={handleCart} data={WomenData} />} />
            <Route path="/jewellery" element={<Categories handleCart={handleCart} data={Jwellery} />} />
            <Route path="/electronics" element={<Categories handleCart={handleCart} data={Electronics} />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
