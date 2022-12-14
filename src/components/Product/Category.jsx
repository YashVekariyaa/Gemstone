import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PostCart, PostWish, Productd, ProductsData } from '../../https/axios'
import CategoryProduct from '../../pages/CategoryProduct'
import Footer from '../Footer'
import Header from '../Header'

const Category = () => {


    // const { subcategory } = useParams()

    // const [product, setProduct] = useState('')

    // useEffect(() => {
    //   async function fetchdata(){
    //     const product = await Productd(subcategory)
    //     console.log("Product",product.data.productinfo)  
    //     setProduct(product.data.productinfo)
    //   }
    //   fetchdata()
    // }, [subcategory])

    const {id} = useParams()
    const {subcategory} = useParams()
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
      async function productdata() {
        const cate = await ProductsData(subcategory)
        setProduct(cate.data.productinfo)
    }
      productdata()
    }, [subcategory])
    
    
    

    // console.log("Filters",filteredData)

  return (
    <>
      <Header products={product} setFilteredData={setFilteredData} />
      {
        product[0] ?
          <>
            <section>
              {
                filteredData[0] ?
                  <CategoryProduct product={filteredData} />
                  :
                  <CategoryProduct product={product} />

              }
            </section>
          </>

          :
          <>
              <h1 className='text-center my-5'>No Product Found</h1>
          </>
      }

      <Footer />
    </>
  )
}

export default Category