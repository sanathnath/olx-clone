import React, {useState, useEffect} from 'react'
import Banner from '../Components/Banner/Banner'
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import Loading from '../Components/Loading/Loading'

function Home() {
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 1000);
            
        
    }, [])
    return (
        <div>
            <Header />
            { Load ? 
            <Loading />
             : <>
             <CategoryHeader />
             <Banner />
             <Posts />
             <Footer />
             </> }
        </div>
    )
}

export default Home
