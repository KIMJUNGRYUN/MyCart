import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing'
import { jwtDecode } from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { addToCartAPI,  decreaseProductAPI,  getCartAPI,  increaseProductAPI,  removeFromCartAPI } from './services/cartServices';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';

setAuthToken(localStorage.getItem('token'));

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== id);
    setCart(newCart);

    removeFromCartAPI(id).catch((err) => {
      toast.err('장바구니 상품 삭제 에러');
    });
  }

  const updateCart = (type, id) =>{  
    const updatedCart = [...cart];

    const productIndex  = updatedCart.findIndex(
      (item) => item.product._id === id
    );
  
    if(type === 'increase'){
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart); 

      increaseProductAPI(id).catch((err) => {
      toast.error('상품 증가 에러');
      });
    }

    if(type === "decrease"){
      updatedCart[productIndex].quantity -= 1;
      setCart(updatedCart); 

      decreaseProductAPI(id).catch((err) => {
      toast.error('상품 감소 에러');
      });
    }
  };
 
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
        toast.success('상품 추가 성공!');
      })
      .catch((err) => {
        toast.error('상품 추가 실패했습니다.');
      });
	};

  //서버에서 장바구니 정보 가져옴
  const getCart = () => {
    getCartAPI()
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        toast.err("카트 가져오기에 실패!.");
      });
  };

  useEffect(() => {
    if(user) getCart();
  }, [user]);
  
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
    <UserContext.Provider value={user}>
      <CartContext.Provider value={{cart, addToCart, removeFromCart, updateCart, setCart}}>
      <div className='app'>
        <ToastContainer position='bottom-right' />
        <Navbar user={user} cartCount={cart.length}/>
      <main>
        <Routing />
      </main>
      </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default App
