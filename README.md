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



