import React from 'react'
import HomeProduct from '../Product/HomeProduct'
import Blog from './Blog'
import BottomBanner from './BottomBanner'
import CategoryBanner from './CategoryBanner'
import CustomerReview from './CustomerReview'
import MainBanner from './MainBanner'
import { TopBanner } from './TopBanner'

const AllBanner = () => {
  return (
    <>
        <MainBanner/>
        <CategoryBanner/>
        <HomeProduct/>
        <TopBanner/>
        <BottomBanner/>
        <Blog/>
        <CustomerReview/>  
    </>
  )
}

export default AllBanner