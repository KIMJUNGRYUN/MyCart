import './ProductsList.css';
import ProductCard from './ProductCard';
import useData from '../../Hook/useData';
import ProductCardSkeleton from './ProductCardSkeleton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Common/Pagination';
import { useEffect, useState } from 'react';

const ProductsList = () => {
  const [search, setSearch] = useSearchParams(); //요청주소 뒤의 쿼리 스트링
  const [sortBy, setSortBy] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);
  const category = search.get('category');  //categor=값 을 가져옴
  const page = search.get('page');
  const searchQuery = search.get('search');

  // ✅ Move this above useEffect
  const { data, error, isLoading } = useData(
    "products",
    {
      params: { search: searchQuery, category, page },
    },
    [searchQuery, category, page]
  );

  //데이터를 선택정렬 방법으로 정렬
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
  }, [sortBy, data]); // ✅ This now works because data is declared earlier

  const handlePageChange = (page) => {
	//기존의 검색한 카테고리가 있으면 유지하면서 페이지만 업데이트
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className='products_list_section'>
      <header className='align_center products_list_header'>
        <h2>상품목록</h2>
        <select onChange={(e) => setSortBy(e.target.value)} className='products_sorting'>
          <option value=''>정렬방법</option>
          <option value='price desc'>가격높은순</option>
          <option value='price asc'>가격낮은순</option>
          <option value='rate desc'>평점높은순</option>
          <option value='rate asc'>평점낮은순</option>
        </select>
      </header>

      <div className='products_list'>
        {error && <em className='form_error'>{error}</em>}
        
        {/* ✅ Fix: Ensure correct rendering of skeletons */}
        {isLoading &&
          skeleton.map((n) => (
            <ProductCardSkeleton key={n} />
          ))}
        
        {!isLoading &&
          sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>

      {/* 페이지네이션 */}
      {data && (
        <Pagination
          total={data.totalProducts}
          perPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
  );
};

export default ProductsList;
