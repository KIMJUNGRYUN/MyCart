import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing'
import { jwtDecode } from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { addToCartAPI } from './services/cartServices';


setAuthToken(localStorage.getItem('token'));

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
 
  //장바구니
	const addToCart = (product, quantity) => {
		const updatedCart = [...cart];
		const productIndex = updatedCart.findIndex(
			(item) => item.product._id === product._id
		);
		if (productIndex === -1) {
			updatedCart.push({ product: product, quantity: quantity });
		} else {
			updatedCart[productIndex].quantity += quantity;
		}
		setCart(updatedCart);

    addToCartAPI(product._id, quantity)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
	};
  
  useEffect(() => {
    
    try{
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);

      if(Date.now() >= jwtUser.exp * 1000){
        localStorage.removeItem('token');
        window.location.reload(); //재시작(새로고침)
      }else{
        setUser(jwtUser);
      }

    }catch(error){}  //token이 없을 경우는 그냥 go
  }, []);  
 
  return (
    
    <div className='app'>
        <Navbar user={user} cartCount={cart.length}/>
      <main>
      
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App
