
import './App.css'
import HomePage from './components/Home/HomePage'
import Navbar from './components/Navbar/Navbar'
import ProductPage from './components/Products/ProductPage'
import ProductsList from './components/Products/ProductsList'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
      <main>
        <ProductPage />
      </main>
    </div>
  );
};

export default App
