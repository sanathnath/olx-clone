import React, {useState, useEffect, useContext} from 'react'
import { PostContext } from '../store/PostContext'
import Banner from '../Components/Banner/Banner'
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import Loading from '../Components/Loading/Loading'
import { getDocs } from 'firebase/firestore'
import { colref_prod } from '../firebase/config'

function Home() {
    const [Products, setProducts] = useState([])
    
    const { isLoading, setIsLoading } = useContext(PostContext);

    const getProducts = async()=>{
        const data = await getDocs(colref_prod).then((snapshot)=>{
            const allPost = snapshot.docs.map((product)=>{
                return{
                    ...product.data(),
                    id:product.id
                }
            })
            return allPost;
        })
        setProducts(data)
        setIsLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, [])
    
    return (
        <div>
            <Header />
            { Products.length == 0 ? 
            <Loading />
             : <>
             <CategoryHeader />
             <Banner />
             <Posts Products={Products}/>
             <Footer />
             </> }  
        </div>
    )
}

export default Home
