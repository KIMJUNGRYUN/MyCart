import React, { useContext, useState } from 'react';
import './SingleProductPage.css';
import QuantityInput from './QuantityInput';
import { useParams } from 'react-router-dom';
import useData from '../../Hook/useData';
import Loader from '../Common/Loader';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';

//서버에서 가져오는 제품 데이터 객체 (임시)
// const product = {
//     id: 1,
//     title: '상품 타이틀',
//     description:
//         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.',
//     price: 9900,
//     images: [
//         'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg',
// 		'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_2.jpg',
// 		'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_3.jpg',
// 		'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Diet_Coke.jpg',
//     ],
//     stock: 10, //재고
// };

const SingleProductPage = () => {
    const user = useContext(UserContext);
    const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity ] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const { id } = useParams();
    const {data: product, err, isLoading} = useData(`products/${id}`);
    console.log(product);

  return (
    <section className='align_center single_product'>
       {err && <em className='form_error'>{err}</em>}
       {isLoading && <Loader />}
        {product._id && (
            <>
                <div className='align_center'>
                <div className='single_product_thumbnails'>
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={`http://localhost:5000/products/${image}`}
                            alt={product.title}
                            className={selectedImage === index ? 'selected_image' : ''}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>

                    <img
                        src={`http://localhost:5000/products/${product.images[selectedImage]}`}
                        alt={product.title}
                        className='single_product_display'
                    />
                </div>

                <div className='single_product_details'>
                    <h1 className='single_product_title'>{product.title}</h1>
                        <p className='single_product_description'>{product.description}</p>
                        <p className='single_product_price'>￦ {product.price.toLocaleString('ko-KR')} 원</p>
                    {user && (
                        <>
                            <h2 className='quantity_title'>구매개수:</h2>
                            <div className='align_center quantity_input'>

                            <QuantityInput 
                                quantity={quantity} 
                                setQuantity={setQuantity} 
                                stock={product.stock} 
                                cartPage={false}
                            />
                        
                            </div>

                            <button 
                                onClick={() => addToCart(product, quantity)}
                                className='search_button add_cart'>장바구니 추가
                            </button>
                        </>
                    )}
                        
                </div>
            </>
    )}
    </section>
    );
};

export default SingleProductPage