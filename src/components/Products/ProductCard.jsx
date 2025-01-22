import React from 'react';
import star from '../../assets/white-star.png';
import basket from '../../assets/basket.png';
import './ProductCard.css';
import { NavLink } from 'react-router-dom';

const ProductCard = ({
	id, 
	image, 
	price, 
	title, 
	rating, 
	ratingCounts, 
	stock}) => {
  return (
    <article className='product_card'>
			<div className='product_image'>
				<NavLink to={`/product/${id}`}>
					<img src={`http://localhost:5000/products/${image}`} alt='product image' />
				</NavLink>
			</div>

			<div className='product_details'>
												{/* ?는 null 아닐때만 변환 */}
				<h3 className='product_price'>{price?.toLocaleString('ko-KR')} 원</h3>
				<p className='product_title'>{title}</p>

				<footer className='align_center product_info_footer'>
					<div className='align_center'>
						<p className='align_center product_rating'>
							<img src={star} alt='star' /> {rating}
						</p>
						<p className='product_review_count'>{ratingCounts}</p>
					</div>
					{/* 재고수가 1개 이상일때만 장바구니 가능 */}
					{stock > 0 && (
					<button className='add_to_cart'>
						<img src={basket} alt='basket button' />
					</button>
					)}
				</footer>
			</div>
		</article>
	);
};

export default ProductCard