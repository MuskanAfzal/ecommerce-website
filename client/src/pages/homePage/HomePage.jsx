import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/dataSlice';
import Navbar from '../../components/navbar/Navbar';
import SideHeader from '../../components/homePageComponents/sideHeader/SideHeader';
import MainHeader from '../../components/homePageComponents/mainHeader/MainHeader';
import FlashSale from '../../components/homePageComponents/flashSale/FlashSale';
import Categories from '../../components/homePageComponents/categories/Categories';
import BestSelling from '../../components/homePageComponents/bestSelling/BestSelling';
import AboutCompany from '../../components/homePageComponents/aboutCompaany/AboutCompany';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, categories, status, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <SideHeader />
      <MainHeader />
      <FlashSale products={products} />
      <Categories categories={categories} />
      <BestSelling bestSelling={products.slice(0, 5)} />
      <AboutCompany />
      <Footer />
    </div>
  );
};

export default HomePage;
