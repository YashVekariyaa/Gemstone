import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AllProducts from '../components/Product/AllProducts'
import { Productd } from '../https/axios'

const Product = () => {

    
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
      async function abc(){
        const ab = await Productd()
        // console.log(ab.data)
        setProducts(ab.data)
      }
      abc()
    }, [])
    

  return (
      <div>
          <Header products={products} setFilteredData={setFilteredData} />
          {
              products[0] ?
                  <>
                      <section>
                        {
                            filteredData[0] ? 
                            <AllProducts products={filteredData} />
                            :
                            <AllProducts products={products} />
                        }
                      </section>
                  </> :
                  <>
                        <h1>Loading...</h1>
                  </>
          }
          <Footer/>
      </div>
  )
}

export default Product