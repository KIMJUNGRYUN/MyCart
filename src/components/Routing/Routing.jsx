import { Route, Routes } from 'react-router-dom';

import HomePage from '../Home/HomePage';
import ProductsPage from '../Products/ProductPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';
import Logout from '../Authentication/Logout';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/product/:id' element={<SingleProductPage />} />
			<Route path='/signup' element={<SignupPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/myorders' element={<MyOrderPage />} />
		</Routes>
	);
};

export default Routing;