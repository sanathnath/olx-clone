import React from 'react'
import AllProducts from '../Components/AllProducts/AllProducts'
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Products() {
    return (
        <div>
            <Header />
            <CategoryHeader />
            <AllProducts />
            <Footer />
        </div>
    )
}

export default Products
