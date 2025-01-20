
import './App.css'
import CartPage from './components/Cart/CartPage'

import HomePage from './components/Home/HomePage'
import MyOrderPage from './components/MyOrder/MyOrderPage'
import Navbar from './components/Navbar/Navbar'
import ProductPage from './components/Products/ProductPage'
import ProductsList from './components/Products/ProductsList'
import SingleProductPage from './components/SingleProduct/SingleProductPage'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
      <main>
        {/* <HomePage />*/}
        {/* <ProductPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        <MyOrderPage />
      </main>
    </div>
  );
};

export default App
