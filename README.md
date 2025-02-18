## myCart 프로젝트

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

- JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택.
- 리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있음.
  - 그럴 땐, 리액트에서 ref 라는 것을 사용.
- 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용.

- **로그인페이지에서 useRef 사용**

```react
const LoginPage = () => {
	const passwordRef = useRef(null);
```

- 입력 패스워드 태그에 ref를 추가하고 아래에 버튼 2개를 추가

```react
<input
							type='password'
							ref={passwordRef}
							id='password'
							className='form_text_input'
							placeholder='패스워드 입력...'
						/>
						<button type='button' onClick={() => console.log(passwordRef.current)}>
							비밀번호 숨기기
						</button>
						<button type='button' onClick={() => (passwordRef.current.type = 'text')}>
			비밀번호 보이게
		</button>
```

```react
	
```


![password](https://github.com/user-attachments/assets/a086ef86-3842-403f-a307-cb0454abed4e)

<hr>

# useState로 Form 사용하기

```react
const LoginPage = () => {

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
	};
```

- eamil과 password 입력에 추가.

```react
onChange={(e) => setUser({ ...user, email: e.target.value })}

onChange={(e) => setUser({ ...user, password: e.target.value })}
```

![LoginForm](https://github.com/user-attachments/assets/d0671b4e-bf44-4d25-99cd-03ae47735eef)

- Submit 버튼 클릭후 이메일, 패스워드 데이터 초기화

```react
setUser({ email: '', password: '' });
```

- user 데이터가 바뀌면 입력들의 value 값이 바뀌고 폼 초기화

 ```![LoginForm1](https://github.com/user-attachments/assets/7ddb4dc7-488c-42ae-99ac-949391b60a39)

```react
value={user.setUser}
```

<hr>

# React Hook Form 사용
[react-hook-form](https://www.npmjs.com/package/react-hook-form)

```react
npm i react-hook-form
```

- Quicstart 문서를 보면 우선 useForm()을 만들기

```react
const { register, handleSubmit } = useForm();
```

- register는 각각의 input에 적용

```react
{...register('email')}
{...register('password')}
```

- handleSubmit은 form의 onSubmit에 적용

```react
onSubmit={handleSubmit((formData) => console.log(formData))}
```

- 이전의 useState와 같게 동작.
  - handleSubmit의 안에 화살표 함수는 더 많은 코드를 적을수도 있으므로 따로 빼어서 아래처럼 수정.

```react
const submitData = (formData) => console.log(formData);
```

```react
onSubmit={handleSubmit(submitData)}
```

- 이렇게 useform의 register(입력등록), handleSubmit(onSubmit액션)을 쉽게 사용.

<hr>

# Form Validation 폼 유효성 검증

[Form Validation](https://www.react-hook-form.com/get-started/#Handleerrors)

- formState: { errors } 를 추가

  ```react
  	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
  ```

  - input에 검증이 필요한 속성을 입력
    - required
    - min (최소값)
    - max (최대값)
    - minLength (최소길이)
     -maxLength
    - pattern
    - validate


- 이메일 input에 추가

```react
{...register('email', { required: '이메일을 이력해주세요.' })}
```

- 이메일 input 태그 아래 추가

```react
{errors.email && <em className='form_error'>{errors.email.message}</em>}
```

- 비밀번호 input에 추가

```react
{...register('password', {
		required: '패스워드를 입력해주세요.',
		minLength: { value: 4, message: '패스워드는 최소 4자 이상.' },
	})}
```

- input 태그 아래에 추가

```react
{errors.password && <em className='form_error'>{errors.password.message}</em>}
```

![LoginForm3](https://github.com/user-attachments/assets/22d89e25-31cf-4498-8bfc-dff31bdec3ca)

<hr>

# 회원가입 Signup 페이지

![Signupjsx](https://github.com/user-attachments/assets/aa467cb3-7b4d-4b0b-a564-b4dc0a6f9c17)


```react
import { useForm } from 'react-hook-form';

import './SignupPage.css';
import user from '../../assets/user.webp';

const SignupPage = () => {
	// const [profilePic, setProfilePic] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const submitData = (formData) => console.log(formData);

	//console.log(profilePic);

	return (
		<section className='align_center form_page'>
			<form className='authentication_form signup_form' onSubmit={handleSubmit(submitData)}>
				<h2>회원가입 폼</h2>

				<div className='image_input_section'>
					<div className='image_preview'>
						<img src={user} id='file-ip-1-preview' />
					</div>
					<label htmlFor='file-ip-1' className='image_label'>
						이미지 업로드
					</label>
					<input
						type='file'
						id='file-ip-1'
						className='image_input'
					/>
				</div>

				{/* Form Inputs */}
				<div className='form_inputs signup_form_input'>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							id='name'
							className='form_text_input'
							type='text'
							placeholder='이름 입력...'
							{...register('name', {
								required: '이름을 입력해주세요.',
								minLength: { value: 2, message: '이름은 최소 2자 이상' },
								maxLength: { value: 10, message: '이름은 최대 10자 이하' },
							})}
						/>
						{errors.name && <em className='form_error'>{errors.name.message}</em>}
					</div>

					<div>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							className='form_text_input'
							type='email'
							placeholder='이메일 입력...'
							{...register('email', {
								required: '이메일을 입력해주세요.',
								pattern: {
									value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
									message: '올바른 이메일 주소를 입력하세요.',
								},
							})}
						/>
						{errors.email && <em className='form_error'>{errors.email.message}</em>}
					</div>

					<div>
						<label htmlFor='password'>Password</label>
						<input
							id='password'
							className='form_text_input'
							type='password'
							placeholder='패스워드 입력...'
							{...register('password', {
								required: '패스워드를 입력해주세요.',
								minLength: { value: 4, message: '패스워드는 최소 4자 이상.' },
							})}
						/>
						{errors.password && <em className='form_error'>{errors.password.message}</em>}
					</div>

					<div>
						<label htmlFor='cpassword'>Confirm Password</label>
						<input
							id='cpassword'
							className='form_text_input'
							type='password'
							placeholder='패스워드 확인 입력...'
							{...register('confirmPassword', {
								required: true,
								validate: (value) => {
									if (watch('password') != value) {
										return '패스워드가 맞지 않습니다.';
									}
								},
							})}
						/>
						{errors.confirmPassword && (
							<em className='form_error'>{errors.confirmPassword.message}</em>
						)}
					</div>

					<div className='signup_textares_section'>
						<label htmlFor='address'>Delivery Address</label>
						<textarea
							id='address'
							className='input_textarea'
							placeholder='배송주소 입력...'
							{...register('deliveryAddress', {
								required: '배송주소를 입력해주세요.',
								minLength: { value: 10, message: '배송주소는 최소 10자 이상.' },
							})}
						/>
						{errors.deliveryAddress && (
							<em className='form_error'>{errors.deliveryAddress.message}</em>
						)}
					</div>
				</div>

				<button className='search_button form_submit' type='submit'>
					Submit
				</button>
			</form>
		</section>
	);
};

export default SignupPage;
```

- css

```css 
.signup_form {
    width: 40%;
}

.image_input_section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image_preview {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
    margin-bottom: 15px;
}

.image_preview img {
    width: 100%;
    height: 100%;
}

.image_input {
    display: none;
}

.image_label {
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 20px;
    text-align: center;
    background: #6457f9;
    color: #fff;
    font-size: 15px;
    font-family: inherit;
    text-transform: Uppercase;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
}

.signup_form_input {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.signup_textares_section {
    grid-column: 1/3;
}

.input_textarea {
    font-size: 17px;
    font-weight: 500;
    font-family: inherit;
    height: 120px;
    resize: none;
    padding: 4px 8px;
    outline: none;
}
```

<hr>

# 이미지 업로드

- SignupPage에 프로파일 이미지 스테이트 만들기.

```react
const [profilePic, setProfilePic] = useState(null);
```

```react
console.log(profilePic);
```

- 파일 업로드 input에서 이미지를 올리면 첫번째 이미지로 업데이트.

```react
onChange={(e) => setProfilePic(e.target.files[0])}
```

- 파일을 프리뷰 하기 위해 URL.createObjectURL(파일)을 사용.


```react
<img src={profilePic ? URL.createObjectURL(profilePic) : user}
```

[URL:createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)

![SignUp](https://github.com/user-attachments/assets/762aa7e9-fa1c-4c99-b7ea-85bc801e10bb)


<hr>

# MongoDB 설치, MongoShell 설치, path 설정

- Mongo DB Community에서 다운로드.

![mongo](https://github.com/user-attachments/assets/7ff3e127-20a3-4c22-8550-efc40acddeeb)


- Mongo Shell 설치.

![MongoShell](https://github.com/user-attachments/assets/b1a6d48d-a0d1-4e3c-b16f-d51ca1a9495f)

-  mongosh.exe를 복사 => mongo.db가 설치된 폴더의 bin에 붙여넣기
 - 마지막 환경변수 설정 C:\Program Files\MongoDB\Server\7.0\bin 현재 폴더까지의 주소를 복사

- 시스템 환경변수 편집에 붙여넣기.
![path](https://github.com/user-attachments/assets/1e528651-0f84-45a7-9b50-5770a1a4ccb5)

- 터미널에서 mongosh 확인하기.
![mongo cmd](https://github.com/user-attachments/assets/a571ad8b-5642-4495-a853-206adef18b35)

<hr>

# BackEnd 실행

- 임시 db로 공부하기
![mon](https://github.com/user-attachments/assets/b5d924a2-d000-4af1-899e-fe2d4598c3ed)

- 노드모듈 설치.

```react
npm install
```

- 몽고DB에 myCart 데이터베이스에 카테고리와 프로덕트 데이터 저장.

```react
 node products.js
```

![Mongo Cate](https://github.com/user-attachments/assets/aebefde6-3047-4df0-a45c-3b5a53284ab8)

- BackEnd 서버 실행하기.

```react
$ node index.js
Server is running on PORT: 5000
DB Connected...
```

- 포트번호 5000으로 실행됨.
  - 아래주소로 벡엔드 서버가 정상적으로 동작하여 카테고리 데이터를 보내는지확인.

```react
http://localhost:5000/api/category
```

![api](https://github.com/user-attachments/assets/56ce863c-e02d-443c-a0e6-3fd1139c76ce)


<hr>

# React Router 적용

- 리액트 라우터 설치하기

```react
$ npm i react-router-dom
```

- main.jsx 에 브라우저라우터로 앱을 감싸서 라우터를 사용 가능하게 설정

```react
<BrowserRouter>
			<App />
		</BrowserRouter>
```

- 라우팅 폴더를 컴포넌츠에 추가.


![Routing Components](https://github.com/user-attachments/assets/1d6864e7-2c7e-4ea4-b6b9-2d3d0e9cf70f)

```react
import { Route, Routes } from 'react-router-dom';

import HomePage from '../Home/HomePage';
import ProductsPage from '../Products/ProductsPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/product/:id' element={<SingleProductPage />} />
			<Route path='/signup' element={<SignupPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/myorders' element={<MyOrderPage />} />
		</Routes>
	);
};

export default Routing;
```

- App.jsx

```react
const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<main>
				<Routing />
			</main>
		</div>
	);
};
```

<hr>

# NavLink 메뉴 클릭시 기본 active 클래스로 CSS

- 메뉴중 장바구니 a 태그를 NavLink로 바꾼다  href => to로 바꿔야 함.

```react
<NavLink to='/cart' className='align_center'>
	장바구니 <p className='align_center cart_counts'>0</p>
</NavLink>
```

- 마찬가지로 LinkWithIcon에 가서 a 태그를 NavLink로 바꾼다.
 - Navbar.css 에 CSS 추가.

```css
.navbar_links > a.active {
	font-weight: 600;
}
```

<hr>

# Axios 설치 및 products 데이터 가져오기

- Axios 라이브러리 설치.

```react
$ npm i axios
```

- src 아래에 utils 폴더 생성. 

![utils](https://github.com/user-attachments/assets/f3ef9d42-1d83-4090-bc32-eec3238ab4b7)

- utils 폴더에 api-client.js 파일생성.

![api-Client](https://github.com/user-attachments/assets/7702c725-1988-46b8-90dd-07a1ea3670b9)

- 서버의 api 기본주소를 설정.

```react
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api"
});
```

- ProductList.jsx

```react
import apiClient from '../utils/api-client';
...

 const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		apiClient
			.get('/products')
			.then((res) => setProducts(res.data.products))
			.catch((err) => setError(err));
	}, []);
```

- 리액트 developer tool로  Components를 보면 ProductList 에 아래처럼 데이터를 가져옴.

![hook](https://github.com/user-attachments/assets/471e340b-803b-4bca-9c35-77d51656daca)

```react
	<div className='products_list'>
				{error && <em className='form_error'>{error}</em>}
				{products.map((product) => (
					<ProductCard key={product._id} />
				))}
			</div>
```

![pro](https://github.com/user-attachments/assets/9958ab76-1d97-410c-ae0a-645b85a42a8c)

<hr>

# ProductCard에 동적 데이터 전달

![ProductCard](https://github.com/user-attachments/assets/318ce6d9-bc10-4ea0-967a-f563882ae227)

```react
const ProductCard = ({ id, image, price, title, rating, ratingCounts, stock }) => {
```

- 제품 id와 제품 이미지

```react
<NavLink href={`product/${id}`}>
	<img src={image} alt='product image' />
</NavLink>
```

- 가격과 타이틀, 가격은 없으면 에러가 나므로 ?로 있을경우에만 원화로 변환함.

```react
	<img src={star} alt='star' /> {rating}
</p>
<p className='product_review_count'>{ratingCounts}</p>
```

- stock 수량이 1개 이상 있을 경우에만 장바구니 담기 아이콘을 보여줌.

```react
{stock > 0 && (
	<button className='add_to_cart'>
		<img src={basket} alt='basket button' />
	</button>
)}
```

- ProductList에서 props 전달.

```react
<div className='products_list'>
				{error && <em className='form_error'>{error}</em>}
				{products.map((product) => (
					<ProductCard
						key={product._id}
						id={product._id}
						image={product.images[0]}
						price={product.price}
						rating={product.rating}
						ratingCounts={product.reviews.counts}
						stock={product.stock}
					/>
				))}
			</div>
```

![ProductServer](https://github.com/user-attachments/assets/6fb74baf-df0d-4416-b6ab-cb9b1d1ee396)

- 이미지가 나오지 않음.  벡엔드 서버 아래의 주소로 요청하기.

```react
<img src={`http://localhost:5000/products/${image}`}
```

![ProductServerImage](https://github.com/user-attachments/assets/2ca69dd7-731e-4699-9a0b-3707d8edb312)

<hr>

# 카테고리 데이터

`ProductSidebar`

- products 가져오는것과 같이 categories를 가져온다.

```react
const ProductsSidebar = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		apiClient
			.get('/category')
			.then((res) => setCategories(res.data))
			.catch((err) => setError(err.message));
	}, []);
```


- error가 있을경우 에러표시 카테고리 데이터들을 map을 서서 반복

```react
				{error && <em className='form_error'>{error}</em>}
				{categories.map((category) => (
					<LinkWithIcon
						key={category._id}
						title={category.name}
						link={`/products?category=${category.name}`}
						emoji={`http://localhost:5000/category/${category.image}`}
						sidebar={true}
					/>
				))}
```

![Category](https://github.com/user-attachments/assets/e109f3b9-a183-45ee-ad5c-016d229b8c25)

# 커스텀 Hook 만들어 ProductSidebar에 적용

- 반복되는 useState와 useEffect 등의 패턴을 커스텀 Hook을 만들어 사용.

![Hooks](https://github.com/user-attachments/assets/bdc2f9b9-1724-4d65-817c-120ed0554a02)

- useData.js  커스텀 훅은 순수 JS이기 때문에 jsx가 아닌 js.

```react
import { useEffect, useState } from 'react';
import apiClient from '../utils/api-client';

const useData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return { data, error };
};

export default useData;
```

 - 커스텀 훅을 사용해서 ProductSidebar.jsx 수정

```react
const ProductsSidebar = () => {
	const { data: categories, error } = useData('category');
```

- categories 데이터가 있을경우에만 map 메소드를 실행하게  categories &&를 붙인다. 만약 데이터가 없을시 에러발생.

```react
	{error && <em className='form_error'>{error}</em>}
				{categories &&
					categories.map((category) => (
						<LinkWithIcon
							key={category._id}
							title={category.name}
							link={`/products?category=${category.name}`}
							emoji={`http://localhost:5000/category/${category.image}`}
							sidebar={true}
						/>
					))}
```

<hr>

# ProductsList 에도 적용.

- useData('/products'); 요청시 data는 아래처럼 아직 products 만 분리가 되지 않았기 때문에 data.products 데이터만 가져온다.

![ProductList](https://github.com/user-attachments/assets/78b75fec-5d49-4fd9-b4f3-2dd487821c63)


```react
const ProductsList = () => {
	const { data, error } =  useData('/products');
```

- 아래에 data.products로 가져온다.

```react
	<div className='products_list'>
				{error && <em className='form_error'>{error}</em>}
				{data.products &&
					data.products.map((product) => (
						<ProductCard
							key={product._id}
							id={product._id}
							image={product.images[0]}
							price={product.price}
							title={product.title}
							rating={product.rating}
							ratingCounts={product.reviews.counts}
							stock={product.stock}
						/>
					))}
			</div>
```

<hr>

# 리액트 Loading Skeleton 적용

[react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)


![skeleton](https://github.com/user-attachments/assets/990c6a9f-ac3b-4572-a371-cb582d68724e)

- ProductCardSkeleton.jsx

```react
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardSkeleton = () => {
	return <Skeleton className='product_card' width='275px' />;
};

export default ProductCardSkeleton;
```

- 스켈레톤은 product_card와 같은 크기로 적용 ProductList 에 products.map 반복하기전에 넣기.

```react
{error && <em className='form_error'>{error}</em>}
				<ProductCardSkeleton />
				{data.products &&
					data.products.map((product) => (
```

![react-sk](https://github.com/user-attachments/assets/5161846b-fc24-443e-9517-3952c84655c5)

```react
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
				{skeletons.map((n) => (
					<ProductCardSkeleton key={n} />
				))}
```

![ske](https://github.com/user-attachments/assets/6d5691a7-533b-4bc5-84cc-d16b0bcb4894)

- 커스텀 훅 useData.js 수정.

```react
const [isLoading, setIsLoading] = useState(false);
```

- axios로 데이터를 가져오기전에 로딩을 true로 업데이트.

```react
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) => { setData(res.data); setIsLoading(false); })
      .catch((err) => { setError(err.message); setIsLoading(false); });
  }, []);
```

- 데이터를 잘가져왔을때 false로 업데이트
- 에러나서 못가져왔을때도 false로 업데이트


```react
return { data, error, isLoading };
```

- 마지막으로 isLoading 을 리턴추가.

- ProductsList 에서 Hook가져올때 isLoading도 추가.


```react
const { data, error, isLoading } = useData('/products');
```

- 스켈레톤은 isLoading이 true 일때 (벡엔드에 데이터 요청주일때만) 보여준다.

```react
{isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
```

<hr>

# 카테고리 별 상품보이기

- ProductSidebar

![product url](https://github.com/user-attachments/assets/11c2fd28-2fe9-41ee-9ee7-e15c7d68b938)

- 링크 수정.

```react
link={`/products?category=${category.name}`}
```

- ProductsList 에서 아래와 같이 쿼리스트링을 받는다.

```react
const ProductsList = () => {
	const [search, setSearch] = useSearchParams();
	const category = search.get('category');
```

- 쿼리스트링 넘어온 category 값을 useData예 두번째 파라미터로 보내고 파라미터가 더 많아질것을 대비해서 객체로 넘기고 세번째 파라미터로 [category]를 넘김.


```react
	const { data, error, isLoading } = useData(
		'/products',
		{
			params: {
				category,
			},
		},
		[category]
	);
```

- useData 수정.

```react
const useData = (url, customConfig, deps) => {
...

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(url, customConfig)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    deps ? deps : []
  );
```

- useEffect에  카테고리가 있을경우 [category] 가 바뀔때마다 다시 리렌더링하고 카테고리가 없으면 [ ] 시작할때 한번 렌더링.

```react
deps ? deps : []);
```

# 페이지네이션 ProductList 

```react
const page = search.get('page');
```

- useData 훅에 page 를 params에 넣고, page가 바뀌면 리렌더링 되도록 [category, page] 를 3번째 입력변수로 넣음.

```react
	const { data, error, isLoading } = useData(
		'/products',
		{
			params: {
				category,
				page,
			},
		},
		[category, page]
	);
```

- 페이지 버튼을 클릭했을때 setSearch로 페이지 번호를 업데이트하면서 다른 카테고리 등은 그대로 두기위해 먼저 currentParams에 원래 있던 값들을 저장하여 setSearch에 먼저 넣고 page만 업데이트.


```react
	const handlePageChange = (page) => {
		const currentParams = Object.fromEntries([...search]);
		setSearch({ ...currentParams, page: page });
	};
​
```

- 아래쪽에 페이지 버튼을 만들어서 클릭해서 2페이지로 가는지 확인.

```react
<button onClick={() => handlePageChange(2)}>페이지 2</button>
</div>
</section>
```

<hr>


# 페이지네이션 컴포넌트

![Pagenation](https://github.com/user-attachments/assets/20573c95-bf45-4f2d-842e-c138dace07f4)

- 다른곳에 자주 재사용가능하게 Common 폴더에 Pagination 만들기.

- Pa
```react
import './Pagination.css';

// 전체아이템개수 ,한페이지표시아이템수, 클릭함수, 현재페이지
const Pagination = ({ total, perPage, onClick, currentPage }) => {
	let pages = [];

	for (let i = 1; i <= Math.ceil(total / perPage); i++) {
		pages.push(i); //페이지수만큼 배열에 숫자를 입력한다.
	}
	//현재 페이지가 없을 경우 첫페이지 1이다.
	currentPage = currentPage ? currentPage : 1;

	return (
		<>
			{pages.length > 1 && (
				<ul className='pagination'>
					{pages.map((page) => (
						<li key={page}>
							<button
								className={
									parseInt(currentPage) === page ? 'pagination_button active' : 'pagination_button'
								}
								onClick={() => onClick(page)}
							>
								{page}
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Pagination;
```

```css

.pagination {
	list-style: none;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 16px;
}

.pagination_button {
	width: 40px;
	height: 40px;
	margin: 0 10px;
	font-size: 16px;
	font-weight: 600;
	border: 1px solid #e5e5e5;
	border-radius: 6px;
	background-color: #fff;
	color: #000;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.pagination_button.active {
	background-color: #000;
	color: #fff;
}
```

<hr>

# PageList에 Pagenation 적용

- useData('/products'); 요청시 data는 아래와 같음. 여기에는 이미 totalProducts 정보가 있음.

![useData](https://github.com/user-attachments/assets/9b4557a6-4914-4097-95cb-3ad515b46d45)

```react
    {/* 페이지네이션 넣기 */}
      {data && (
        <Pagination
          total={data.totalProducts}
          perPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
```

![pageNation1](https://github.com/user-attachments/assets/8c9acefd-2450-4ac2-bc56-e4fe46942f41)

<hr>

# SingleProductPage

- 우선 ProductCard를 클릭했을때 주소를 체크.
  - 화면에서 콘솔창(F12)으로 제품이미지 클릭시 주소와 아이디가 잘 나오는지 확인 ex) http://localhost:5173/product/64fbedd76b9bf5f33fea3966
- 이상이 있을시 ProductCard에 가서 NavLink to의 주소를 꼭 확인!

```react
<NavLink to={`/product/${id}`}>
	<img src={`http://localhost:5000/products/${image}`} alt='product image' />
</NavLink>
```

- 이 제품이미지를 클릭하면 아래와 같은 라우팅 주소로 요청함.
  - 라우팅 주소를 보면 id가 주소에 / id 형식으로 들어온다.
 
```react
	<Route path='/product/:id' element={<SingleProductPage />} />
```

- 싱글페이지에서 이 ID를 우선 변수로 입력받아야 함.
  - 이때 리액트 라우터의 useParams를 사용하자.

​```react
const SingleProductPage = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const { id } = useParams();
	console.log(id);

	const { data: product, error, isLoading } = useData(`/products/${id}`);
	console.log(product);
 ```

- 이제 useData를 이용해 동적으로 product를 입력받으므로 const product객체는 이제 삭제.
- 콘솔로 product 객체가 잘 나오는지도 확인하고 product 객체가 아직 서버의 응답이 없을경우는 { } 빈 객체값이 나오는데 이를 체크하기 위해서 아래에 product._id가 있을경우에만 화면을 표시.

```react

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

				<h2 className='quantity_title'>구매개수:</h2>
				<div className='align_center quantity_input'>
                <QuantityInput quantity={quantity} setQuantity={setQuantity} stock={product.stock} />
                </div>

				<button className='search_button add_cart'>장바구니 추가</button>
			</div>
            </>
```

- 이미지주소들도 벡엔드의 이미지주소로 수정.

```react
<img
	  src={`http://localhost:5000/products/${image}`}
```

- 마찬가지로 선택한 이미지도 백엔드에서 가져옴.

```react
<img
	  src={`http://localhost:5000/products/${product.images[selectedImage]}`}
```

```react
	</>
   )}
</section>
```

<hr>

# Loader 컴포넌트 Common 폴더에 추가하고 프로덕트 싱글페이지에 적용하기

- 로더 컴포넌트는 실제 서비스에서 벡엔드 서버가 데이터를 가져오는 잠깐동안의 시간에 isLoading이 true인 동안에 로딩중을 나타내는 화면을 표시하기 위함이다. 로컬에서 진행중일때는 알지 못하기 때문에 Network에서 Fast3G에 체크하고 재시작하면 조금 보이게 됨.


![Loader](https://github.com/user-attachments/assets/33af9f6c-48b4-4616-9d57-a5e55f606603)

```react
import './Loader.css';

const Loader = () => {
	return (
		<div>
			<div className='lds-ellipsis'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
```

```css
.lds-ellipsis {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}
.lds-ellipsis div {
	position: absolute;
	top: 33px;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: #cdcdcd;
	animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
	left: 8px;
	animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
	left: 8px;
	animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
	left: 32px;
	animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
	left: 56px;
	animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes lds-ellipsis3 {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}
@keyframes lds-ellipsis2 {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}
}
​
```

- 싱글프로젝트 페이지에서 에러와 프로덕트 사이에 넣기.

```react
{error && <em className='form_error'>{error}</em>}
			{isLoading && <Loader />}
			{product._id && (
```

<hr>

# SingleProductPage 구매개수 증가 감소 버튼

- SingProductPage

```react
const [quantity, setQuantity ] = useState(1);
```

```react
<QuantityInput quantity={quantity} setQuantity={setQuantity} stock={product.stock} />
```

- QuantityInput

```react
			<button
				onClick={() => setQuantity((prev) => prev-1)}
				className='quantity_input_button'
				disabled={quantity <= 1}
			>
            <p className='quantity_input_count'>{quantity}</p>
			<button
				onClick={() => setQuantity((prev) => prev+1)}
				className='quantity_input_button'
				disabled={quantity >= stock}
			>
​
```

<hr>

# PostMan으로 signup 가입하기 테스트

![postman signup](https://github.com/user-attachments/assets/c796f611-ca54-4f46-9550-b5df9667fab7)

![postman token](https://github.com/user-attachments/assets/316721fb-01f9-4c3f-baad-8f42b8429fdf)

```react
http://localhost:5000/api/user/signup
```

```react
{
    "name": "Dooly",
    "email": "dooly@naver.com",
    "password": "12345678",
    "deliveryAddress": "부산광역시 부산진구"
}
```

- DB에 users 테이블 추가됨.

![mongo users](https://github.com/user-attachments/assets/92026286-8e1d-4f31-b500-6e7acc39ccbd)



- 정상적으로 가입시 JWT (제이슨 웹 토큰)이 생성됨.

- 이번에는 form-data를 선택해서 이미지도 같이 넣어서 보내기.

![postman img](https://github.com/user-attachments/assets/9a2f800d-69e6-484a-8f44-8e8ac5d8bfcf)

![postman object](https://github.com/user-attachments/assets/de6cde99-46fd-4f05-ae23-22ba7de1144d)

<hr>

# userServices.js의 signup 함수로 Signup 페이지 가입하기

![userService](https://github.com/user-attachments/assets/f809969a-2206-4414-b32c-a7fcc4b7864e)

- userServices.js

```react
import apiClient from '../utils/api-client';

export async function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  await apiClient.post('/user/signup', body);
}
```

- SignupPage 에서 submitData 함수를 수정.
  - async await를 써서 벡엔드에서 가입이 끝날때까지 대기함.
 
```react
	const submitData = async (formData) => {
		await signup(formData, profilePic);
	};
```

- 실제로 동작하는지 회원가입 폼에가서

- 패스워드는 8자 이상으로 수정. 
  - submit 클릭시 화면은 똑같지만 오른쪽 네트워크에 보면 signup 요청으로 토큰이 응답된것을 알 수 있음.


![kakaotalk](https://github.com/user-attachments/assets/915655a4-b89d-4765-95e3-1e7fa42c3231)
  
![jeju](https://github.com/user-attachments/assets/95205163-c71e-46b4-9bd1-1d38fafb5630)

- 똑같은 이메일로 가입시 에러메세지가 돌아옴.

![error](https://github.com/user-attachments/assets/3cb3c5ab-e9ee-4157-b2b0-4a064bc6ea75)

<hr>

# Signup 에러 처리

```react
const submitData = async (formData) => {
		try {
			await signup(formData, profilePic);
		} catch (err) {
			console.log(err.response.data.message);
		}
	};
```

- 에러메세지를 스테이트로 만들기.

```react
	const [formError, setFormError] = useState('');
```

- 콘솔로그 대신에 에러메세지를 업데이트.

```react
setFormError(err.response.data.message);
```

- 폼화면의 submit 버튼 위체 에러메세지 출력.

```react
{formError && <em className='form_error'>{formError}</em>}
```

![register](https://github.com/user-attachments/assets/c1f1cace-2ff5-4ef6-83f2-de3195591f55)

<hr>

# Login Page PostMan 테스트

- 포스트맨 테스트

![login post](https://github.com/user-attachments/assets/42e08c0d-f557-4069-9411-42066d751601)

<hr>

# Login 하기 및 에러 처리

- 1.로그인 함수 작성

```react
export async function login(user) {
  await apiClient.post('/user/?', user);
}
​
```

- 2.로그인 페이지에서 로그인하고 에러 발생시 스테이트 업데이트

```react
const [formError, setFormError] = useState('');
...

	const submitData = async (formData) => {
		try {
			await login(formData);
		} catch (err) {
			setFormError(err.response.data.message);
		}
	};
​```

- 3.에러 메시지 폼 아래 버튼위에 에러 메시지 추가.

```react
formError && <em className='form_error'>{formError}</em>}
```


# JWT 토큰 발급과 useServices에서 로컬스토리지에 토큰 저장하고 홈페이지로 가기

[JWT.IO](https://jwt.io/)

- 로그인을 하거나 가입시 서버에서 JWT 토큰을 발급해 주는데 이 토큰을 복사해 Encoded에 넣어보면 암호화된 토큰을 오른쪽처럼 decode 풀어서 보여준다.
  - 즉 name, email. 등의 유저의 정보가 담겨있고 3번째 아래쪽 시그니처는 암호화되어 있어 벡엔드에서 만든 암호화코드가 있어야 확인 가능하다.

  - 로그인/가입시 서버에서는 클라이언트에게 JWT 토큰을 발행해주고 클라이언트는 이 토큰을 서버로 요청시 같이 첨부하여 인증된 유저임을 서버가 알게해서 로그인 상태를 유지한다. 서버에서는 이 토큰만 검사하면 되므로 DB를 다시 검색해 유저인지 확인할 필요가 없다.

![jwt](https://github.com/user-attachments/assets/c20077cb-18ba-4dcf-b70e-d9d4d7af8248)

- useServices.js

```
 const { data } = await apiClient.post('/user/signup', body);
  localStorage.setItem("token", data.token);
}

export async function login(user) {
  const { data } = await apiClient.post("/user/login", user);
  localStorage.setItem("token", data.token);
}
```

- 로그인하면 로컬스토리지에 토큰이 저장됨.

![token](https://github.com/user-attachments/assets/b151cf60-6e3d-49ac-a3b0-c7f7dc31229d)

- 로그인페이지에서 로그인 되면 홈페이지 이동.

```react
window.location = '/';
```

- Signup도 수정하기.

```react
onst submitData = async (formData) => {
		try{
			await signup(formData, profilePic);
			window.location = '/';
		}catch(error){
			setFormError(error.response.data.message);
		}
    };
```

<hr>

# App에서 토큰 정보로 유저 관리하기 && 네브바 메뉴를 로그인 상태에 따라서 다르게 보여주기

- 로그인/가입시 서버에서 만들어준 토큰을 로컬스토리지에 저장.
  - App에서 토큰을 가져와 유저정보를 useState로 업데이트

```react
const [user, setUser] = useState(null);
```

- 시작시 jst 토큰을 가져옴

```react
useEffect(()=>{
		const jwt = localStorage.getItem("token")
	},[])
```

- 토큰은 암호화 되어있기 때문에 암호를 풀수있는 라이브러리 설치.

```react
npm i jwt-decode
```

```react
import jwtDecode from 'jwt-decode';
...

	useEffect(() => {
		const jwt = localStorage.getItem('token');
		const jwtUser = jwtDecode(jwt);
		console.log(jwtUser);
	}, []);
```

![object](https://github.com/user-attachments/assets/08c977f9-31d6-4129-b8ae-76b010f66626)

- 토큰이 없으면 Try Catch로 에러를 처리.

```react
	try {
			const jwt = localStorage.getItem('token');
			const jwtUser = jwtDecode(jwt);
			setUser(jwtUser);
		} catch (error) {}
```

- 시큐리티 문제로 jwt 토큰의 유효가능 시간이 설정되어 있다고 한다.
  - 여기서는 1시간인데 실제 서비스에서는 더 짧게 잡을 수 있다.
  - 유효기간이 지난 토큰의 정보는 삭제.

```react
if (Date.now() >= jwtUser.exp * 1000) {
				localStorage.removeItem('token');
				location.reload();
			} else {
				setUser(jwtUser);
			}
```

- Date.now()는 밀리세컨드 ms 이고 jwtUser.exp는 초단위 이므로 *1000을 한다.


- 유저 정보를 App에서 Navbar로 전달

```react
<Navbar user={user] />
```

- 유저정보가 있을경우에만 주문,로그아웃,장바구니메뉴 없을경우 로그인,가입


```react
{!user && (
	<>
		<LinkWithIcon title='로그인' link='/login' emoji={idButton} />
		<LinkWithIcon title='가입' link='/signup' emoji={memo} />
	</>
)}
{user && (
	<>
		<LinkWithIcon title='내주문' link='/myorders' emoji={order} />
		<LinkWithIcon title='로그아웃' link='/logout' emoji={lock} />
		<NavLink to='/cart' className='align_center'>
			장바구니 <p className='align_center cart_counts'>0</p>
		</NavLink>
	</>
)}
```

<hr>

# 로그아웃

![LogOut](https://github.com/user-attachments/assets/76df0654-e271-4fcc-8849-19d50665fb75)

- 로그아웃은 리턴이 필요없음 return null 토큰을 삭제하고 홈페이지로 이동.

```react
const Logout = () => {
	localStorage.removeItem('token');
	window.location = '/';

	return null;
};

export default Logout;
```

- 라우팅에 추가.

```react
<Route path='/logout' element={<Logout />} />
```

<hr>

# 장바구니 state 관리와 Navbar에 갯수 표시

- 장바구니는 Navbar에서 보여주고, SingleProduct에서 추가. 두개의 컴포넌트의 공통부모인 App에서 선언

![db relationship](https://github.com/user-attachments/assets/995b5112-c979-4cf0-9564-f2947da38ce7)

- App 에 cart 스테이트.

```react
const [cart, setCart] = useState([]);
```

- Navbar에 cart의 갯수만 넘기기.

```react
<Navbar user={user} cartCount={cart.length} />
```

- Navbar에서 장바구니 갯수 표시.


```react
장바구니 <p className='align_center cart_counts'>{cartCount}</p>
```

<hr>

# 장바구니 추가 => SingleProductPage

- App에서 상품을 추가하는 함수 만들기.

```react
const addToCart = (product, quantity) => {
		setCart([...cart, { product, quantity }]);
	};
```

- 라우팅으로 전달.

```react
<Routing addToCart={addToCart} />
```

```react
<SingleProductPage addToCart={addToCart} />
```

- SingleProductPage의 장바구니 추가 버튼

```react
 onClick={() => addToCart(product, quantity)}
```

![cart](https://github.com/user-attachments/assets/b42df0f6-6382-4c82-8763-1d8292cd7dcb)

<hr>

# 장바구니에 같은 제품도 게속 추가 되는 문제해결

- App

```react
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
	};
```

- 갯수도 확인.



![number](https://github.com/user-attachments/assets/cb9c28d3-fe17-4894-b653-6346c9bed711)

<hr>

# 인증된 유저만 사용가능 API

- 장바구니 cart에 새 제품과 수량을 업데이트 하는 요청

![Autho api](https://github.com/user-attachments/assets/b788e68e-11a2-4083-8a05-0c4c0c817597)

![setAutho](https://github.com/user-attachments/assets/89e694d8-cba7-4e2f-b5c5-1c589d812209)

```react
import apiClient from "./api-client";

//axios의 헤더에 토큰을 추가한다.
const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete apiClient.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
​
```

- App import

```react
setAuthToken(localStorage.getItem('token'));

const App = () => {
```

<hr>

-  App에 적용해 addToCart에서 벡엔드의 카트 업데이트(cartServices.js)


- 백엔드 서버에 카드관련 서비스를 담당할 파일 cartSercies.js 만들기.

![CartService](https://github.com/user-attachments/assets/3a6bb6f7-e928-4884-9218-c447cc62cbb1)

-  카트에 제품id와 수량을 추가.

```react
import apiClient from "../utils/api-client";

export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}
```

- App

```react
 setCart(updatedCart);

		addToCartAPI(product._id, quantity)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
```

![cartServices](https://github.com/user-attachments/assets/26271238-b89a-4d7f-b9d3-ce7f9b6eed2a)

<hr>

# react-toastify 설치 및 toastify 메시지 

```react
$ npm i react-toastify
```

- App 추가

```react
import { ToastContainer, toast } from 'react-toastify';
```

```react
addToCartAPI(product._id, quantity)
			.then((res) => {
				toast.success('상품 추가 성공!');
			})
			.catch((err) => {
				toast.error('상품 추가에 실패했습니다.');
			});
```

- main의 Rounting 위에

# 유저의 카트를 가져오기 from 백엔드, 카드정보를 카트페이지로 전달

- cartServices.js 에 벡엔드에서 카트정보를 가져오는 함수를 만들기.

```react
export async function getCartAPI() {
  return await apiClient.get("/cart");
}
```

- App 에 getCart함수를 만들어서 벡엔드에서 카트 데이터를 가져옴.
  - 이때 useEffect를 써서 유저가 바뀌면 그 유저의 카트 데이터를 가져오게 함.


```react
	const getCart = () => {
		getCartAPI()
			.then((res) => {
				setCart(res.data);
			})
			.catch((err) => {
				toast.error('카트 가져오기에 실패했습니다.');
			});
	};

	useEffect(() => {
		getCart();
	}, [user]);
```

- 카트정보를 가져오는 함수를 카트 페이지로 전달하기.

```react
<Routing addToCart={addToCart} cart={cart} />
```

- Routing

```react
const Routing = ({ addToCart, cart}) => {
```

```react
<Route path='/cart' element={<CartPage cart={cart} />} />
```

- 카트 페이지에서 페이지 시작할때 벡엔드에서 카트정보를 가져옴.

```react
const CartPage = ({ cart }) => {

```
<hr>

# 카트페이지에 카드정보를 계산해 표시

```recat
const CartPage = ({ cart }) => {
	console.log(cart);
```

![array](https://github.com/user-attachments/assets/9edb8925-2f99-42da-b830-701afad98db8)


```react
<tbody>
	  {cart.map(({ product, quantity }) => (
	  <tr key={product._id}>
		<td>{product.title}</td>
		<td>{product.price.toLocaleString('ko-KR')} 원</td>
		<td className='align_center table_quantity_input'>
			<QuantityInput quantity={quantity} stock={product.stock} />
		</td>
		<td>{(quantity * product.price).toLocaleString('ko-KR')} 원</td>
		<td>
			<img src={remove} alt='remove icon' className='cart_remove_icon' />
		</td>
	   </tr>
	 ))}
	</tbody>
```

![dooly](https://github.com/user-attachments/assets/9d949469-acc4-47d2-8113-5d3aceac878c)

- 카트페이지 상단에 subTotal 스테이트 만들기 (배송비 뺀 합계).

```react
const CartPage = ({ cart }) => {
	const [subTotal, setSubTotal] = useState(0);
```

- 카트가 수정될때마다 합계 계산하기.

```react
useEffect(() => {
		let total = 0;
		cart.forEach((item) => {
			total += item.product.price * item.quantity;
		});
		setSubTotal(total);
	}, [cart]);
```

- 아래쪽 간단한 계산 테이블에 입력하기

```react
<tr>
						<td>총 금액</td>
						<td>{subTotal.toLocaleString('ko-KR')} 원</td>
					</tr>
					<tr>
						<td>배송비</td>
						<td>3,000 원</td>
					</tr>
					<tr className='cart_bill_final'>
						<td>결재금액</td>
						<td>{(subTotal + 3000).toLocaleString('ko-KR')} 원</td>
					</tr>
```

![doolypay](https://github.com/user-attachments/assets/d6df425b-06fc-4f32-9e52-ed7bed5913e5)

<hr>

# UserContext 만들어 적용

![userContext](https://github.com/user-attachments/assets/1dd5fdf9-3f4f-4bc2-a7c5-c8bb64279efd)

```react
import { createContext } from "react";

const UserContext = createContext(null);

export default UserContext;
```

- App 에 UserContext를 가져오기.

```react
import UserContext from './contexts/UserContext';
```

- 모든 컴포넌트에서 user를 사용가능하도록 Provider로 감싸기.

```react
return (
		<UserContext.Provider value={user}>
			<div className='app'>
				...
			</div>
		</UserContext.Provider>
	);
};
```

- 바로 CartPage로 가서 useContext(유저컨텍스트)로 user객체를 받는다.

```react
import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
```

- User 이미지는 삭제.

```react
const CartPage = ({ cart }) => {
	const [subTotal, setSubTotal] = useState(0);
	const userObj = useContext(UserContext);
	console.log(userObj);
```

![object1](https://github.com/user-attachments/assets/8a2eeb93-a152-4bcf-8d7d-37ab7dfeb051)

- 이렇게 해서 user 정보를 바로 CartPage에서  useContext(UserContext)를 사용해 받음.

```react
<div className='align_center user_info'>
				<img src={`http://localhost:5000/profile/${user?.profilePic}`} alt='user profile' />
				<div>
					<p className='user_name'>{user?.name}</p>
					<p className='user_email'>{user?.email}</p>
				</div>
			</div>
```

![payment](https://github.com/user-attachments/assets/08b5a716-fb1c-42c0-bab1-8540c781c4f6)

<hr>

# CartContext 만들어 적용하기

- 1.카트 컨텍스트
  
![CartContext](https://github.com/user-attachments/assets/f0750cb3-46c7-4204-a79c-10bf0edf51eb)

- 2.App에 Provider적용  value에 cart 와 addToCart 함수를 적용

```react
		<UserContext.Provider value={user}>
			<CartContext.Provider value={{ cart, addToCart }}>
				<div className='app'>
					...
				</div>
			</CartContext.Provider>
		</UserContext.Provider>
```

- 3.각각의 사용컴포넌트에 적용하기 App에서 Routing 프롭스 제거

```react
<Routing />
```

- 라우팅에서 cart 나 addToCart 프롭스 제거.

```react
<Route path='/product/:id' element={<SingleProductPage />} />
```

```react
<Route path='/cart' element={<CartPage />} />
```

- CartPage

```react
const CartPage = () => {
	...
	const { cart, addToCart } = useContext(CartContext);
```

- SingleProductPage

```react
const SingleProductPage = () => {
	const { addToCart } = useContext(CartContext);
```

<hr>

# 장바구니의 상품삭제 추가

- App

```react
const removeFromCart = (id) => {
		const oldCart = [...cart];
		const newCart = oldCart.filter((item) => item.product._id !== id);
		setCart(newCart);
	};
```

- CartProvider에 추가

```react
value={{ cart, addToCart, removeFromCart }}>
```

- 카트 페이지

```react
const { cart, removeFromCart } = useContext(CartContext);
```

- 삭제아이콘에 추가하기

```react
onClick={() => removeFromCart(product._id)}
```

<hr>

# 백엔드에 아이템 삭제

- cartServices.js 벡엔드의 cart에 상품 삭제.

```react
export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}
```

- App의 removeFromCart 에 추가하기.

```react
removeFromCartAPI(id).catch((err) => {
			toast.error('장바구니 상품 삭제 에러');
		});
```

<hr>

# 장바구니에서 상품 증가 감소

- App 에 상품을 type에 따라서 증가, 감소시키는 함수 작성

```react
onst updateCart = (type, id) => {
		const updatedCart = [...cart];
		const productIndex = updatedCart.findIndex((item) => item.product._id === id);

		if (type === 'increase') {
			updatedCart[productIndex].quantity += 1;
			setCart(updatedCart);
		}
		if (type === 'decrease') {
			updatedCart[productIndex].quantity -= 1;
			setCart(updatedCart);
		}
	};
```

- CartContext의 Provider value에 추가.

```react
value={{ cart, addToCart, removeFromCart, updateCart }}>
```

- 카트페이지에서 updateCart 가져오기.

```react
const { cart, removeFromCart, updateCart } = useContext(CartContext);
```

- QuantityInput에 프롭스 전달.

```react
<QuantityInput
									quantity={quantity}
									stock={product.stock}
									setQuantity={updateCart}
									cartPage={true}
									productId={product._id}
								/>
```

- QuantityInput에 추가하기.

```react
const QuantityInput = ({ ... cartPage, productId }) => {
```

- 감소, 증가 버튼에 추가하기.

```react
onClick={() => {
   cartPage ? setQuantity('decrease', productId) : setQuantity((prev) => prev - 1);
}}
```

- 벡엔드 API 추가하기 cartServices.

```react
export function increaseProductAPI(id) {
  return apiClient.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id) {
  return apiClient.patch(`/cart/decrease/${id}`);
}
```

- App의 updateCart에 increase 일때

```react
			increaseProductAPI(id).catch((err) => {
				toast.error('상품 증가 에러');
			});
```

- updateCart에 decrease 일때


```react
decreaseProductAPI(id).catch((err) => {
				toast.error('상품 감소 에러');
			});
```

<hr>

# ProductCard 에서 바로 장바구니 담기

- 우선 ProductList 로 가서 대신에 product만 전달.

![ProductCard add](https://github.com/user-attachments/assets/e7792e6a-713e-491c-b08d-e262a77e5832)

```react
	<ProductCard
			key={product._id}
			product={product}
		/>
```

- ProductCard

```react
const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);
```

- 모든 변수들을 product?.를 앞에 붙여서 수정.

```react
<NavLink to={`/product/${product?._id}`}>
```

- 이미지는 아래처럼 수정

```react
<img src={`http://localhost:5000/products/${product?.images[0]}`}
```

- 수정

```react
{product?.price.toLocaleString('ko-KR')} 원
```

```react
{product?.title}
```

```react
{product?.reviews.rate}
```

```react
{product?.reviews.counts}
```

- stock도 수정하고 장바구니아이콘 클릭시 addToCart로 추가한다. 수량은 1개로 한다.

```react
{product?.stock > 0 && (
	<button className='add_to_cart' onClick={() => addToCart(product, 1)}>
		<img src={basket} alt='basket button' />
	</button>
)}
```

<hr>

# 인증된 유저만 장바구니 담기

- ProductCard 에 user를 추가 (useContext사용)

```react
const ProductCard = ({ product }) => {
	const { addToCart } = useContext(CartContext);
	const user = useContext(UserContext);
```

- 유저가 있을 경우에만 장바구니 버튼 보임

```react
{product?.stock > 0 && user && (
```


![product button](https://github.com/user-attachments/assets/b3e63ad7-dc26-46c6-a413-95df5fc7cf7c)


- SingleProductPage 에도 user 추가.

```react
const SingleProductPage = () => {
	const { addToCart } = useContext(CartContext);
	const user = useContext(UserContext);
```

- 유저가 로그인 했을경 우에만 구매 장바구니 가능.

```react
{user && (
	<>
		<h2 className='quantity_title'>구매개수:</h2>
		<div className='align_center quantity_input'>
			<QuantityInput
				quantity={quantity}
				setQuantity={setQuantity}
				stock={product.stock}
			/>
		</div>

		<button
			className='search_button add_cart'
			onClick={() => addToCart(product, quantity)}
		>
			장바구니 추가
		</button>
	</>
)}

```

![button](https://github.com/user-attachments/assets/3b77e678-290b-4741-9c1b-60eb497577a6)

<hr>

# checkout 주문하기.

![orderService](https://github.com/user-attachments/assets/0bc92359-0d53-4c33-8573-4a7a771f611b)

```react
import apiClient from '../utils/api-client';

export function checkoutAPI() {
  return apiClient.post("/order/checkout");
}
```

- App 의 CartContext에 setCart를 추가.

```react
<CartContext.Provider value={{ ..., setCart }}>
```

- CartPage에서 setCart를 가져옴.(컨텍스트)

```react
const { ..., setCart } = useContext(CartContext);
```

- CartPage에서 체크아웃 함수 작성.

```react
const checkout = () => {
		const oldCart = [...cart];
		setCart([]); //카트 비우기
		checkoutAPI()
			.then(() => {
				toast.success('주문 성공!');
			})
			.catch(() => {
				toast.error('checkout 중 에러발생.');
				setCart(oldCart);
			});
	};
```

- 결재하기 버튼에 클릭시 checkout 함수 실행.

```react
<button className='search_button checkout_button' onClick={checkout}>
	결재하기
</button>
```

- 상품을 장바구니에 담은뒤 결재하기를 클릭.


![product db](https://github.com/user-attachments/assets/037f86b0-1e0d-4eef-a8f3-5d5d97ec76e9)

- 바구니에 제품을 담은뒤 결재하면 주문과 동시에 장바구니 상품들이 사라짐.

![product pay](https://github.com/user-attachments/assets/8e0e8555-6274-4005-8070-94ca4d9a8248)

- 몽고DB에 orders 테이블에 주문이 입력.

![mongo db pay](https://github.com/user-attachments/assets/03d63ac7-452f-4354-843c-6646f014c3a7)

<hr>

# 내 주문 페이지에 orders 데이터 가져와 표시하기

- 벡엔드 서버에 저장된 내 주문들을 가져오는 요청주소

```react
 [GET] 주문 상세 가져오기 - http://localhost:5000/api/order/
```

- Get 으로 데이터를 가져오는 방법은 이미 useData.js 파일에 정의되어 있으므로 사용해서 데이터를 가져와 orders로 하기.

```react
const MyOrderPage = () => {
	const { data: orders, error, isLoading } = useData('/order');
```

- 주문이 있을경우에만 테이블을 표시.

```react
<section className='align_center myorder_page'>
	{orders && (
		<Table headings={['내주문', '상품들', '결재금액', '주문상태']}>
			<tbody>
				{orders.map((order, index) => (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>iPhone, Power Bank</td>
						<td>{order.total.toLocaleString('ko-KR')} 원</td>
						<td>{order.status}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)}
</section>
​
```

![orders](https://github.com/user-attachments/assets/51ceafdb-0e57-473b-b4cb-6db91cd2a871)

- orders 데이터에는 따로 제품들의 이름이 들어있지는 않다. getProductString 함수를 만들어서 주문1개에 들어있는 제품들의 이름(수량) 형식으로 문자열로 리턴.

```react
	const getProductString = (order) => {
		const productStringArr = order.products.map((p) => `${p.product.title}(${p.quantity})`);
		return productStringArr.join(', ');
	};
```

```react
<td>{getProductString(order)}</td>
```

![order](https://github.com/user-attachments/assets/5ad6bf88-cb8f-49c3-921c-b82989ef7053)

<hr>

# 네비게이션 가드 (라우팅 보호)를 사용해서 로그인 유저가 아니면 url 주소로 접근 못하게함.

- 먼저 로그인 되어 있는 유저는 로그인/ 가입하기 페이지로 가지 않고 요청시 홈페이지로 되돌리자. App에서 props 로 user정보를 받는다.

```react
const Routing = ({ user }) => {
	return (
		<Routes>
        ...
<Route path='/signup' element={user ? <Navigate to='/' /> : <SignupPage />} />
<Route path='/login' element={user ? <Navigate to='/' /> : <LoginPage />} />
```

![Protected](https://github.com/user-attachments/assets/08a72c74-cbf9-4e6a-92ae-9204329cbdaa)

- 유저정보가 있을경우에 <Outlet /> 즉 원래 요청 페이지를 보여주고 없을경우에는 로그인 페이지로 보냄.

```react
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user }) => {
	return user ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
```

- 이것을 라우팅 에 아래 내주문, 로그아웃 ,장바구니에 적용

```react
<Route element={<ProtectedRoute user={user} />}>
	<Route path='/logout' element={<Logout />} />
	<Route path='/cart' element={<CartPage />} />
	<Route path='/myorders' element={<MyOrderPage />} />
</Route>
```

<hr>


# 홈페이지 대표상품 가져오기

- [GET] 대표 상품 가져오기 - http://localhost:5000/api/products/featured

```react
  const FeaturedProducts = () => {
  const { data: products, error, isLoading } = useData("products/featured");
	const skeletons = [1, 2, 3];
  return (
    <section className='featured_products'>
        <h2>주요제품</h2>

        <div className='align_center featured_products_list'>
        {error && <em className='form_error'>{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
				
				{products && !isLoading &&
					products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					/>
				))}

```

<hr>

# 홈페[이지 화면의 바로구매를 클릭시 제품 상세페이지로 이동 

```react
  <HeroSection
        title='아이폰 14 프로 그 이상'
        subtitle='Experience the power of the latest iPhone 14 with our most Pro camera ever.'
        link='/product/678f0e2a4fb368143d4bb7bf'
        image={iphone}
    />

    <FeaturedProducts />

    <HeroSection
        title='궁극의 장비를 세팅하세요'
        subtitle='You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini.'
        link='/product/678f0e2a4fb368143d4bb7c7'
        image={mac}
```

- Herosection

```react
<Link to={link} className='hero_link'>
					바로구매
				</Link>
```

<hr>

# 상품 검색

- 1.Navbar에서 search 스테이트

```react
const [search, setSearch] = useState('');
```

- 2.검색 입력 input 에 추가할 속성

```react
검색 입력 input 에 추가할 속성
```

- 3. form에 onSubmit 속성 추가

```react
onSubmit={handleSubmit}
```

- 4. 검색버튼 누름 => submit 이벤트 발생=>handleSubmit 실행 이때 검색어가 공백이면 실행안되게 공백을 제거하고 검색어가 있을경우에 동작

```react
const handleSubmit = (e) => {
		e.preventDefault();
		if (search.trim() !== '') {
			navigate(`/products?search=${search.trim()}`);
		}
	};
```

- 상단에 네비게이트 선언하여 리액트-라우트로 빠르게 이동.

```react
const navigate = useNavigate();
```

- 5. 결국 제품페이지를 보여주는데 검색어로 제품들이 나올수 있게 ProductsList 에서  쿼리스트링 search='검색어' 를 우선 가져오자.
 
```react
const searchQuery = search.get('search');
```

- useData에 입력하는 두번째와 세번째 내용을 수정.

```react
	{
			params: {
				search: searchQuery,
				category,
				page,
			},
		},
		[searchQuery, category, page]
```

<hr>

# product sosrting

- ProductsList 에서 정렬방법 sortBy 와 정렬한제품들 sortedProducts를 만듬.

```react
const ProductsList = () => {
	const [sortBy, setSortBy] = useState('');
	const [sortedProducts, setSortedProducts] = useState([]);
```

- 상품정렬 select에 onChange 작성하여 state값을 업데이트함.

```react
<select ...
					className='products_sorting'
					onChange={(e) => setSortBy(e.target.value)}
				>
```

- useEffect 를 import 하고 상품데이터를 정렬방법에 따라 sort 하여서 정렬한뒤 sortedProducts에 업데이트함. 정렬방법을 없을경우에는 상품데이터 그대로저장.

```react
	useEffect(() => {
		if (data && data.products) {
			const products = [...data.products];

			if (sortBy === 'price desc') {
				setSortedProducts(products.sort((a, b) => b.price - a.price));
			} else if (sortBy === 'price asc') {
				setSortedProducts(products.sort((a, b) => a.price - b.price));
			} else if (sortBy === 'rate desc') {
				setSortedProducts(products.sort((a, b) => b.reviews.rate - a.reviews.rate));
			} else if (sortBy === 'rate asc') {
				setSortedProducts(products.sort((a, b) => a.reviews.rate - b.reviews.rate));
			} else {
				setSortedProducts(products);
			}
		}
	}, [sortBy, data]);
```

- 정렬된상품으로 화면을 표시.

```react
sortedProducts.map((product) => <ProductCard.../>)}
```
