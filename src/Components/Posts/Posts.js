import React, { useContext, useEffect, useState } from 'react'
import { getDocs } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { colref_prod } from '../../firebase/config'
import { PostContext } from '../../store/PostContext'

import './Post.css'
import Heart from '../../assets/Heart'



function Posts() {
    const navigate = useNavigate('')
    const [Products, setProducts] = useState([])
    const { setPostDetails } = useContext(PostContext)
    useEffect(() => {
        getDocs(colref_prod).then((snapshot)=>{
            const allPost = snapshot.docs.map((product)=>{
                return{
                    ...product.data(),
                    id:product.id
                }
            })
            console.log(allPost);
            setProducts(allPost)
        })
    }, [])
    return (
        <div className='postParentDiv'>
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
                </div>
                <div className="cards">
                  { Products.map((product)=>{

                      return(
                      <div className="card"
                      onClick={()=>{
                          setPostDetails(product)

                          navigate('/view')
                      }}
                      >
                          <div className="favorite">
                              <Heart />
                          </div>
                          <div className="image">
                              <img src={product.url} alt="" />
                          </div>
                          <div className="content">
                              <p className="rate">&#x20B9;{product.Price}</p>
                              <span className="category">{product.Category}</span>
                              <p className="name">{product.Name}</p>
                          </div>
                          <div className="date">
                              <span>{product.createdAt}</span>
                          </div>
                      </div>
                    )
                  })  }
                </div>
            </div>
            <div className="recommendations">
                <div className="heading">
                    <span>Fresh Recommentations</span>
                </div>
                <div className="cards">
                    {Products.map((product)=>{
                        return(
                            <div className="card"
                    onClick={()=>{
                        setPostDetails(product)
                        navigate('/view')
                    }}>
                        <div className="favorite">
                            <Heart />
                        </div>
                        <div className="image">
                            <img src={product.url} alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9;{product.Price}</p>
                            <span className="category">{product.Category}</span>
                            <p className="name">{product.Name}</p>
                        </div>
                        <div className="date">
                            <span>{product.createdAt}</span>
                        </div>
                    </div>
                        )
                    })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Posts
