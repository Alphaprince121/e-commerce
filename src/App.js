
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.jpeg'
import women_banner from './Components/Assets/women_banner.png'
import kids_banner from './Components/Assets/kids_banner.png'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner}  category='mens'/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner}  category='women'/>}/>
      <Route path='/kids' element={<ShopCategory  banner={kids_banner} category='kid'/>}/>
      <Route path='product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  

    </div>
  );
}

export default App;
