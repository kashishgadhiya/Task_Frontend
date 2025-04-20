import React from 'react'
import ProductsGallery from '../components/ProductsGallery';
import IntroductionSection from '../components/IntroductionSection';
import ProductsGrid from '../components/ProductCard';
import VideoGallery from '../components/VideoGallery';
import RatingsAndReviews from '../components/RatingsAndReviews';
import  ContactUs from "../components/ContactUs"
const HomePage = () => {
  return (
    <div>
        <ProductsGallery />
    <IntroductionSection />
    <ProductsGrid />
    <VideoGallery />
    <ContactUs />
    <RatingsAndReviews />
    </div>
  )
}

export default HomePage
