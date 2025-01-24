import React, { useContext, useEffect, useState } from 'react'
import './CartPage.css';
import remove from '../../assets/remove.png';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import { checkoutAPI } from '../../services/orderServices';
import { toast } from 'react-toastify';

const CartPage = () => {
    // console.log(cart);
    const [subTotal, setSubTotal] = useState(0);
    const {cart, removeFromCart, updateCart, setCart} = useContext(CartContext);
    const user = useContext(UserContext); //useContext로 UseContext 가져오기

    const checkout =() => {
        const oldCart = [...cart]; //복사
        setCart([]); //카트 비우기
        checkoutAPI()
            .then(() => toast.success('주문성공'))
            .catch(() => {
                toast.error('주문중 에러발생')
                setCart(oldCart);   //실패했을 경우 장바구니 복구
            })
    };

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        setSubTotal(total);
    }, [cart]);

  return (
    <section className='align_center cart_page'>
        <div className='align_center user_info'>
            <img src={`http://localhost:5000/profile/${user?.profilePic}`} alt='user profile' />
            <div>
                <p className='user_name'>{user?.name}</p>
                <p className='user_email'>{user?.email}</p>
            </div>
        </div>

   {/* 제목 열 */}
    <Table headings={['상품', '가격', '구매수량', '총 금액', '상품삭제']}>
        <tbody>
            {cart.map(({product, quantity}) => (
                <tr key={product._id}>
                <td>{product.title}</td>
                <td>{(product.price).toLocaleString("ko-KR")} 원</td>
                <td className='align_center table_quantity_input'>
                    <QuantityInput  
                        quantity={quantity} 
                        stock={product.stock} 
                        setQuantity={updateCart} 
                        cartPage={true} 
                        productId={product._id}
                    />
                </td>
                <td>{(quantity * product.price).toLocaleString("ko-KR")} 원</td>
                <td>
					<img onClick={() => removeFromCart(product._id)} src={remove} alt='remove icon' className='cart_remove_icon' />
				</td>
            </tr>
            ))}
        </tbody>
    </Table>

			<table className='cart_bill'>
				<tbody>
					<tr>
						<td>총 금액</td>
						<td>{subTotal.toLocaleString('kr-KR')} 원</td>
					</tr>
					<tr>
						<td>배송비</td>
						<td>3,000 원</td>
					</tr>
					<tr className='cart_bill_final'>
						<td>결재금액</td>
						<td>{(subTotal + 3000).toLocaleString('ko-KR')} 원</td>
					</tr>
				</tbody>
			</table>

			<button 
                onClick={checkout}
                className='search_button checkout_button'>
                결재하기
            </button>
    </section>
  );
};

export default CartPage