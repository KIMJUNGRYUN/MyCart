## 쇼핑물 

```react
$ npm create vite

$ cd myCart/

$ npm install

$ npm run dev
```

- App.jsx 의 모든 내용삭제 후 간편히 만듬

```react
import './App.css';

const App = () => {
	return (
		<div className='app'>
			<nav>Navbar</nav>
			<main>라우팅</main>
		</div>
	);
};

export default App;
​```

- App.css

```css
.app {
	display: grid;
	grid-template-rows: 80px auto;
}
```

- index.css

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-size: 16px;
	background-color: #f6f8fa;
}
```
- [폰트 적용](https://noonnu.cc/font_page/366)

- index.css(폰트추가)

```react
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
```

- 폰트 적용해서 사용

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'GmarketSansMedium', sans-serif;
}
```

<hr>

# Navbar Component

![components](https://github.com/user-attachments/assets/ea906f02-5616-4c54-9858-85e2546e6d6c)

- Navbar.jsx

```
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='align_center navbar'>
			<div className='align_center'>
				<h1 className='navbar_heading'>myCart</h1>
				<form className='align_center navbar_form'>
					<input type='text' className='navbar_search' placeholder='제품 찾기...' />
					<button type='submit' className='search_button'>
						검색하기
					</button>
				</form>
			</div>
			<div className='align_center navbar_links'>
                
            </div>
		</nav>
	);
};

export default Navbar;
```

- index.css에 공용 CSS 넣기

```css
.align_center {
	display: flex;
	align-items: center;
}
```

- Navbar.css

```css
.navbar {
    justify-content: space-between;
    padding: 0 40px;
    background-color: #fff;
}

.navbar_heading {
    margin-right: 20px;
    font-size: 32px;
}

.navbar_form {
    width: 450px;
    height: 40px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    padding: 3px;
}

.navbar_search {
    flex: 1;
    height: 100%;
    padding: 0 7px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    outline: none;
}

.search_button {
    height: 100%;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    background-color: #6457f9;
    color: #fff;
    cursor: pointer;
}
```

![routing](https://github.com/user-attachments/assets/2d7c9763-433d-4130-9b5c-2873d35665b3)

<hr>

# Navbar Link

![assets](https://github.com/user-attachments/assets/81eaefc1-77e3-42ea-a067-0bb03bd85938)

- Navbar.jsx에 이미지를 불러옴

```react
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';
```

- 네브바 링크에 Home 링크 추가

```react
<div className='align_center navbar_links'>
   <a href='#' className='align_center'>
      	Home <img src={rocket} alt='' className='link_emoji' />
    </a>
</div>
```

- index.css에 공용 a 태그 CSS넣기

```css
a {
	font-size: inherit;
	font-weight: 500;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}
```

- Navbar.css

```css
.navbar_links {
	font-size: 20px;
}

.navbar_links > a {
	margin: 15px;
}

.link_emoji {
	width: 25px;
	margin-left: 5px;
}
```

![navbar](https://github.com/user-attachments/assets/ec709b70-c32f-4a2b-a007-2ba2b1142434)

<hr>

# LinkWithIcon 컴포넌트

- a 링크과 아이콘 이미지를 따로 컴포넌트로 분리.

```react
<a href='#' className='align_center'>
					Home <img src={rocket} alt='' className='link_emoji' />
				</a>
```

![LinkwithIcon](https://github.com/user-attachments/assets/e95b5485-afac-4241-bbde-a38d84e3c82b)

- LinkWithIcon.jsx

```react
import './LinkWithIcon.css';

const LinkWithIcon = ({ title, link, emoji }) => {
	return (
		<a href={link} className='align_center'>
			{title} <img src={emoji} alt='' className='link_emoji' />
		</a>
	);
};

export default LinkWithIcon;
```

- LinkWithIcon.css 링크이모지 css를 Navbar.css에서 가져옴.

```css
.link_emoji {
	width: 25px;
	margin-left: 5px;
}
```

- Navbar 에 LinkWithIcon을 사용해서 각각의 메뉴를 완성.

```react
<div className='align_center navbar_links'>
				<LinkWithIcon title='홈페이지' link='/' emoji={rocket} />
				<LinkWithIcon title='상품들' link='/products' emoji={star} />
				<LinkWithIcon title='로그인' link='/login' emoji={idButton} />
				<LinkWithIcon title='가입' link='/signup' emoji={memo} />
				<LinkWithIcon title='내주문' link='/myorders' emoji={order} />
				<LinkWithIcon title='로그아웃' link='/logout' emoji={lock} />
</div>
```

![icons](https://github.com/user-attachments/assets/c022eb8a-13a8-4be3-bf42-8f07b02a012d)

- 장바구니 추가하기
  - 장바구니는 따로 아이콘 없이 숫자로 카드 개수를 넣음.

```react
	<a href='/cart' className='align_center'>
					장바구니 <p className='align_center cart_counts'>0</p>
				</a>
```

- Navbar.css

```css
.cart_counts {
	justify-content: center;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-color: #6457f9;
	color: #fff;
	font-size: 15px;
	margin-left: 5px;
}
```

![icon](https://github.com/user-attachments/assets/95e58834-badb-45f0-99db-f3bf8c892272)

<hr>

# HomePage 만들기

![HomePage](https://github.com/user-attachments/assets/a6571313-2050-48a2-b4f4-3cf1253664fe)

```react
import React from 'react';
import HeroSection from './HeroSection';

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			{/* 상품들 */}
			{/* 히어로 섹션 */}
		</div>
	);
};

export default HomePage;
```

![HeroSection](https://github.com/user-attachments/assets/52bf9c7d-6813-4275-aac0-4c33a0694dd1)

- HeroSection.jsx

```react
import './HeroSection.css';
import iphone from '../../assets/iphone-14-pro.webp';

const HeroSection = () => {
	return (
		<section className='hero_section'>
			<div className='align_center'>
				<h2 className='hero_title'>아이폰 14 구매하세요</h2>
				<p className='hero_subtitle'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quibusdam.
				</p>
				<a href='#' className='hero_link'>
					바로구매
				</a>
			</div>

			<div className='align_center'>
				<img src={iphone} alt='' className='hero_image' />
			</div>
		</section>
	);
};

export default HeroSection;
```

- App에 홈페이지 추가

```react
const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<main>
				<HomePage />
			</main>
		</div>
	);
};
```

- HeroSection.css

```css
.hero_section {
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 550px;
	padding: 0 60px;
	background-color: #000;
	color: #fff;
}

.hero_section > div {
	justify-content: center;
	flex-direction: column;
	text-align: center;
}

.hero_title {
	font-size: 45px;
	font-weight: 700;
	margin-bottom: 15px;
}

.hero_subtitle {
	font-size: 24px;
	margin-bottom: 32px;
	width: 70%;
}

.hero_link {
	padding: 16px 32px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	font-weight: 700;
	border: 2px solid #fff;
	border-radius: 32px;
	background-color: #fff;
	color: #000;
	transition: all 0.3s ease-in-out;
}

.hero_link:hover {
	background-color: transparent;
	color: #fff;
}

.hero_image {
	height: 500px;
	transition: all 0.3s ease-in-out;
}

.hero_image:hover {
	transform: scale(1.05);
}
```

![home](https://github.com/user-attachments/assets/39cf52af-68f4-46c1-80cf-aa0aee72a377)


<hr>

## 히어로 섹션 재사용

- props로 title,subtitle,link,image를 입력받도록 수정.

```react
const HeroSection = ({title, subtitle, link, image}) => {
	return (
		<section className='hero_section'>
			<div className='align_center'>
				<h2 className='hero_title'>{title}</h2>
				<p className='hero_subtitle'>
					{subtitle}
				</p>
				<a href={link} className='hero_link'>
					바로구매
				</a>
			</div>

			<div className='align_center'>
				<img src={image} alt='' className='hero_image' />
			</div>
		</section>
	);
};
```

- HomePage.jsx

```react
<div>
			<HeroSection
				title='아이폰 14 프로 그 이상'
				subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
				link='/'
				image={iphone}
			/>

			{/* 상품들 */}

			<HeroSection
				title='궁극의 장비를 세팅하세요'
				subtitle='You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini.'
				link='/'
				image={mac}
			/>
```

![Hero](https://github.com/user-attachments/assets/b7b57532-8baa-4233-bc71-cefe837ce8e8)

- 두개의 히어로 섹션.

<hr>

# FeaturedProducts 컴포넌트

- 히어로 섹션들 사이에 주요 제품들을 보여줄 `FeaturedPorducts` 만들기.

![FeaturedProducts](https://github.com/user-attachments/assets/9b379876-d05d-4607-8f5b-81642a5cb400)

- FeaturedProducts.jsx

```react
import './FeaturedProducts.css';

const FeaturedProducts = () => {
	return (
		<section className='featured_products'>
			<h2>주요제품</h2>

			<div className='align_center featured_products_list'>
				<article className='product_card'>상품</article>
			</div>
		</section>
	);
};

export default FeaturedProducts;
```

- HomePage.jsx 히어로 섹션들 사이에 넣기.

```react
		<div>
			<HeroSection
				title='아이폰 14 프로 그 이상'
				subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
				link='/'
				image={iphone}
			/>

			<FeaturedProducts />

			<HeroSection
				title='궁극의 장비를 세팅하세요'
				subtitle='You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini.'
				link='/'
				image={mac}
			/>
		</div>
```

- FeaturedProducts.css

```css
.featured_products {
	margin: 65px;
}

.featured_products > h2 {
	font-size: 48px;
	text-align: center;
	margin-bottom: 65px;
}

.featured_products_list {
	justify-content: space-evenly;
	margin-bottom: 65px;
}
```

![featured_products](https://github.com/user-attachments/assets/72d559d4-8827-4a5e-9bf0-4bf769d560e7)

<hr>

# ProductCard 넣기

- Products 폴더 추가 후 ProductCard 만들기.

![Products](https://github.com/user-attachments/assets/d044586f-0afa-444f-af24-a539ab8e9b57)

- ProductCard.jsx

```react
import './ProductCard.css';
import iphone from '../../assets/iphone.jpg';
import star from '../../assets/white-star.png';
import basket from '../../assets/basket.png';

const ProductCard = () => {
	return (
		<article className='product_card'>
			<div className='product_image'>
				<a href='product/1'>
					<img src={iphone} alt='product image' />
				</a>
			</div>

			<div className='product_details'>
				<h3 className='product_price'>120만원</h3>
				<p className='product_title'>iPhone 14 PRO</p>

				<footer className='align_center product_info_footer'>
					<div className='align_center'>
						<p className='align_center product_rating'>
							<img src={star} alt='star' /> 5.0
						</p>
						<p className='product_review_count'>120</p>
					</div>

					<button className='add_to_cart'>
						<img src={basket} alt='basket button' />
					</button>
				</footer>
			</div>
		</article>
	);
};

export default ProductCard;
```

- ProductCard.css

```css
.product_card {
    width: 275px;
    height: 330px;
    margin: 20px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fff;
    overflow: hidden;
}

.product_image {
    height: 200px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
}

.product_image img {
    height: 100%;
}

.product_details {
    padding: 10px 20px;
}

.product_price {
    font-size: 21px;
    font-weight: 700;
}

.product_title {
    font-size: 18px;
    margin-top: 4px;
}

.product_info_footer {
    justify-content: space-between;
    margin: 10px 0;
}

.product_rating {
    height: 30px;
    padding: 4px 8px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #fca311;
    color: #fff;
}

.product_rating img {
    width: 20px;
    margin-right: 5px;
}

.product_review_count {
    font-size: 16px;
    margin-left: 10px;
    color: grey;
    padding: 0 10px;
    border-left: 2px solid #dcdcdc;
}

.add_to_cart {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 100%;
    background: transparent;
    cursor: pointer;
}

.add_to_cart img {
    width: 100%;
    height: 100%;
}
```

- FeaturedProducts 에 ProductCard를 추가.

```react
<div className='align_center featured_products_list'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
```

![product](https://github.com/user-attachments/assets/e5843ed8-6ee2-43f7-a776-90cc4c0b5883)

<hr>

# 상페이지(ProductsPage)

![PRODUCT DETAIL](https://github.com/user-attachments/assets/75535b5b-cf0b-490e-a8f3-1bd41d408ca6)


- ProductsPage.jsx

```react
const ProductsPage = () => {
	return (
		<section className='products_page'>
			{/* 왼쪽 카테고리 */}
			{/* 상품목록 */}
		</section>
	);
};

export default ProductsPage;
```

- ProductPage.css

```css
.products_page {
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 20px;
}
```

![Products details](https://github.com/user-attachments/assets/37519420-7b69-4cfa-92a4-354691986318)

- ProductsSidebar.jsx

```react
import './ProductsSidebar.css';
import rocket from '../../assets/rocket.png';
import LinkWithIcon from '../Navbar/LinkWithIcon';

const ProductsSidebar = () => {
	return (
		<aside className='products_sidebar'>
			<h2>카테고리</h2>

			<div className='category_links'>
				<LinkWithIcon
					title='전자제품'
					link='products?category=electronics'
					emoji={rocket}
					sidebar={true}
				/>
			</div>
		</aside>
	);
};

export default ProductsSidebar;
```

- ProductsSidebar.css

```css
.products_sidebar {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #fff;
}

.products_sidebar h2 {
    font-size: 26px;
    margin-bottom: 10px;
}
```

- ProductList.jsx

```react
import './ProductsList.css';
import ProductCard from './ProductCard';

const ProductsList = () => {
	return (
		<section className='products_list_section'>
			<header className='align_center products_list_header'>
				<h2>상품목록</h2>
				<select name='sort' id='' className='products_sorting'>
					<option value=''>정렬방법</option>
					<option value='price desc'>가격높은순</option>
					<option value='price asc'>가격낮은순</option>
					<option value='rate desc'>평점높은순</option>
					<option value='rate asc'>평점낮은순</option>
				</select>
			</header>

			<div className='products_list'>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</section>
	);
};

export default ProductsList;
```

- ProductList.css

```css
.products_list_section {
    padding: 10px;
    padding-left: 30px;
}

.products_list_header {
    justify-content: space-between;
}

.products_list_header h2 {
    font-size: 26px;
}

.products_sorting {
    font-size: 18px;
    font-weight: 500;
    font-family: inherit;
    height: 35px;
    padding: 0 5px;
    border: none;
    outline: none;
    border-radius: 5px;
}

.products_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
```

- App.jsx에 ProductsPage 보여주기.

```react
const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<main>
				{/* <HomePage /> */}
				<ProductsPage />
			</main>
		</div>
	);
};
```

<hr>

# SingleProductPage

![SingleProduct](https://github.com/user-attachments/assets/5e71ac2b-0395-4ecb-af3b-271c5073dcf0)

- SingleProductPage.jsx

```react
import './SingleProductPage.css';

const product = {
	id: 1,
	title: '상품 타이틀',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.',
	price: 9900,
	images: [
		'https://via.placeholder.com/500x500?text=Product+Image+1',
		'https://via.placeholder.com/500x500?text=Product+Image+2',
		'https://via.placeholder.com/500x500?text=Product+Image+3',
		'https://via.placeholder.com/500x500?text=Product+Image+4',
	],
	stock: 10,
};

const SingleProductPage = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	return (
		<section className='align_center single_product'>
			<div className='align_center'>
				<div className='single_product_thumbnails'>
					{product.images.map((image, index) => (
						<img
							src={image}
							alt={product.title}
							className={selectedImage === index ? 'selected_image' : ''}
							onClick={() => setSelectedImage(index)}
						/>
					))}
				</div>

				<img
					src={product.images[selectedImage]}
					alt={product.title}
					className='single_product_display'
				/>
			</div>

			<div className='single_product_details'>

			</div>
		</section>
	);
};

export default SingleProductPage;
```

- App.jsx

```react
			<main>
				{/* <HomePage /> */}
				{/* <ProductsPage /> */}
				<SingleProductPage />
			</main>
```

- SingleProductPage.css

```css
.single_product {
    justify-content: center;
    padding: 32px 48px;
}

.single_product_thumbnails {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 14px;
    padding: 8px;
    margin: 16px;
}

.single_product_thumbnails img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.single_product_display {
    width: 600px;
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
}

.selected_image {
    transform: scale(1.12);
}
```

![images](https://github.com/user-attachments/assets/2a887a2b-6d28-4a65-9e27-7be8a30eeefa)

<hr>

# SingleProductPage(상품 디테일)

- SingleProductPage.jsx

```react
<div className='single_product_details'>
				<h1 className='single_product_title'>{product.title}</h1>
				<p className='single_product_description'>{product.description}</p>
				<p className='single_product_price'>￦ {product.price.toLocaleString('ko-KR')} 원</p>

				<h2 className='quantity_title'>구매개수:</h2>
				<div className='align_center quantity_input'>
                       {/* <QuantityInput /> */}
                </div>

				<button className='search_button add_cart'>장바구니 추가</button>
			</div>
```

- SingleProductPage.css

```react
.single_product_details {
	width: 35%;
	padding: 16px 24px;
}

.single_product_title {
	margin-bottom: 16px;
	font-size: 32px;
}

.single_product_description {
	margin-bottom: 16px;
	line-height: 1.4;
}

.single_product_price {
	margin-bottom: 16px;
	font-size: 24px;
	font-weight: 600;
}

.quantity_title {
	font-size: 20px;
	font-weight: 700;
	margin-bottom: 3px;
}

.quantity_input {
	font-size: 20px;
	font-weight: 700;
	margin: 5px 0 16px;
}

.add_cart {
	width: fit-content;
	padding: 8px 18px;
}
```

![title](https://github.com/user-attachments/assets/65e007d9-9f61-4273-8286-97271a7dc330)

<hr>

# QuantityInput 컴포넌트


![Quan](https://github.com/user-attachments/assets/223b5e73-dda8-4a33-9057-1b6da5146c89)

- 구매 개수와 장바구니 추가 사이의 + - 버튼과 갯수

```react
<div className='align_center quantity_input'>
					<QuantityInput />
				</div>
```

- QuantityInput.jsx

```react
import "./QuantityInput.css";

const QuantityInput = () => {
    return (
        <>
            <button className='quantity_input_button' disabled>
                {" "}
                -{" "}
            </button>
            <p className='quantity_input_count'>1</p>
            <button className='quantity_input_button'> + </button>
        </>
    );
};

export default QuantityInput;
```

- QuantityInput.css

```css
.quantity_input_button {
    width: 35px;
    height: 35px;
    font-size: 25px;
    background-color: #ff8848;
    color: #fff;
    border: none;
    border-radius: 100%;
    cursor: pointer;
}

.quantity_input_button:disabled {
    opacity: 0.3;
    cursor: default;
}

.quantity_input_count {
    margin: 0 40px;
    text-align: center;
}
​
```

<hr>

# 장바구니 Cart 페이지

![CartPage](https://github.com/user-attachments/assets/ec547b3d-34c2-49ec-925d-156d4a08c8b0)


- CartPage.jsx

```react
import './CartPage.css';
import remove from '../../assets/remove.png';
import user from '../../assets/user.webp';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';

const CartPage = () => {
	return (
		<section className='align_center cart_page'>
			<div className='align_center user_info'>
				<img src={user} alt='user profile' />
				<div>
					<p className='user_name'>Dooly</p>
					<p className='user_email'>dooly@naver.com</p>
				</div>
			</div>

			<Table headings={['상품', '가격', '구매수량', '총 금액', '상품삭제']}>
				<tbody>
					<tr>
						<td>iPhone 14</td>
						<td>1200,000 원</td>
						<td className='align_center table_quantity_input'>
							<QuantityInput />
						</td>
						<td>1200,000 원</td>
						<td>
							<img src={remove} alt='remove icon' className='cart_remove_icon' />
						</td>
					</tr>
				</tbody>
			</Table>


		</section>
	);
};

export default CartPag
```

- CartPage.css

```css
.cart_page {
	flex-direction: column;
	justify-content: center;
	width: 60%;
	margin: 0 auto;
	padding: 32px 48px;
}

.user_info {
	gap: 16px;
	margin-bottom: 32px;
}

.user_info img {
	width: 80px;
	height: 80px;
	object-fit: cover;
	border-radius: 100%;
}

.user_name {
	font-size: 21px;
	font-weight: 600;
}

.cart_remove_icon {
	width: 35px;
	height: 35px;
	cursor: pointer;
}
```

- Table 컴포넌트를 따로 분리하여 다른 페이지에서도 재사용 가능하게 함.

![Table](https://github.com/user-attachments/assets/c5bbfd95-627e-4eab-b783-f66f15f332c7)

- Table.jsx

```react
import './Table.css';

const Table = ({ headings, children }) => {
	return (
		<table className='common_table'>
			<thead>
				<tr>
					{headings.map((item, index) => (
						<th key={index}>{item}</th>
					))}
				</tr>
			</thead>
			{children}
		</table>
	);
};

export default Table;
```

- Table.css

```css
.common_table {
    width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
}

.common_table thead th {
    height: 50px;
    background-color: #36304a;
    color: #fff;
    text-transform: uppercase;
}

.common_table tbody tr {
    height: 50px;
    text-align: center;
}

.common_table tbody tr:nth-child(even) {
    background-color: #f5f5f5;
}
```

![table ex](https://github.com/user-attachments/assets/74806e26-dc73-4c58-b66d-4aa39fe0560e)

- 테이블 아래에 간단한 테이블과 결재하기 버튼을 넣기.
  - CartPage의 Section 안에 Table 끝나고 아래에 단순 테이블을 넣기.

```react
	<table className='cart_bill'>
				<tbody>
					<tr>
						<td>총 금액</td>
						<td>1200,000 원</td>
					</tr>
					<tr>
						<td>배송비</td>
						<td>5,000 원</td>
					</tr>
					<tr className='cart_bill_final'>
						<td>결재금액</td>
						<td>1205,000 원</td>
					</tr>
				</tbody>
			</table>

			<button className='search_button checkout_button'>결재하기</button>
```

- CartPage.css 추가.

```css
.cart_bill {
	align-self: flex-end;
	width: 400px;
	border-collapse: collapse;
	font-size: 16px;
	margin-top: 16px;
	background-color: #fff;
}

.cart_bill td {
	padding: 12px 20px;
	border: 3px solid #e5e5e5;
}

.cart_bill td:last-child {
	text-align: end;
	width: 250px;
}

.cart_bill_final {
	font-size: 20px;
	font-weight: 700;
}

.checkout_button {
	align-self: flex-end;
	height: 38px !important;
	margin: 16px 0;
	padding: 0 16px !important;
}

.table_quantity_input {
	height: 50px;
	justify-content: center;
}
```

![total](https://github.com/user-attachments/assets/df677ce9-6b7a-4c29-a847-a63408a70094)

<hr>

# MyOrderPage

- 이전에 사용한 Table 컴포넌트를 사용하여 주문페이지를 만들기.

![OrderPage](https://github.com/user-attachments/assets/7565173c-e9e3-4bfc-b0f3-b2257033f775)

- MyOrderPage.jsx

```react
import Table from '../Common/Table';

const MyOrderPage = () => {
	return (
		<section className='align_center myorder_page'>
			<Table headings={['내주문', '상품들', '결재금액', '배송상태']}>
				<tbody>
					<tr>
						<td>1</td>
						<td>iPhone, Power Bank</td>
						<td>1205,000 원</td>
						<td>배송중</td>
					</tr>
				</tbody>
			</Table>
		</section>
	);
};

export default MyOrderPage;
```

- MyOrderPage.css

```css
.myorder_page {
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding: 32px 48px;
}
```

<hr>

# LoginPage

- LoginPage.jsx

```react
import './LoginPage.css';

const LoginPage = () => {

	return (
		<section className='align_center form_page'>
			<form className='authentication_form'>
				<h2>로그인 폼</h2>
				<div className='form_inputs'>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							className='form_text_input'
							placeholder='이메일 입력...'
						/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							className='form_text_input'
							placeholder='패스워드'
						/>
					</div>

					<button type='submit' className='search_button form_submit'>
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default LoginPage;
```

- LoginPage.css

```css
.form_page {
    justify-content: center;
}

.authentication_form {
    width: 30%;
    padding: 32px 48px;
    margin-top: 32px;
    background-color: #fff;
}

.authentication_form h2 {
    font-size: 40px;
    margin-bottom: 30px;
    text-align: center;
}

.form_inputs div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.form_inputs label {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
}

.form_text_input {
    height: 35px;
    padding: 0 8px;
    font-size: 17px;
    font-weight: 500;
    outline: none;
}

.form_submit {
    height: 40px;
    width: 100%;
    margin: 25px 0 10px;
}

.form_error {
    color: red;
}
```

<hr>

# useRef로 특정 태그 선택

![LoginPage](https://github.com/user-attachments/assets/842eb416-1546-4855-9f93-20e8e0f382aa)

