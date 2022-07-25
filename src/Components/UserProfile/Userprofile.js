import { getDocs, query, where } from 'firebase/firestore';
import React,{useEffect, useContext, useState} from 'react'
import { Navigate } from 'react-router';
import { colref_prod } from '../../firebase/config';
import { AuthContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext'

import './UserProfile.css';



function Userprofile() {
    const [u, setU] = useState("")
    const { User } = useContext(AuthContext);
    const [myProd, setmyProd] = useState([]);
    const { setPostDetails } = useContext(PostContext)

    useEffect(()=>{
        setU(User.uid);
        // const u = User.uid;
        getDocs(colref_prod).then((snapshot)=>{
            const allPost = snapshot.docs.map((product)=>{
                return{
                    ...product.data(),
                    id:product.id
                }
            })
            const searchPosts = allPost.filter((post)=>{
                return post.userId === u ? post : "";
            })
            setmyProd(searchPosts);
            console.log(searchPosts);
            console.log(User);
        })
       return ()=>{
        setU("");
       }
    },[])
    return (
        <div className='profileMain'>
            <div className="sidePanel">
                <div className="profile-avatar">
                    
                </div>
                <div className="sidePanel_content">
                    <h4>{User.displayName}</h4>
                    <span>{User.email}</span>
                </div>
            </div>
            
            <div className="right_mainPanel">
            <div className="cards">
                { myProd.map((item)=>{
                    return(
                        <div className="card"
                    onClick={()=>{
                        setPostDetails(item)
                        Navigate('/view')
                    }}>
                        
                        <div className="image">
                            <img src={item.url} alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">&#x20B9;{item.Price}</p>
                            <span className="category">{item.Category}</span>
                            <p className="name">{item.Name}</p>
                        </div>
                        <div className="date">
                            <span>{item.createdAt}</span>
                        </div>
                    </div>
                     )
                }) }  
                </div>
            </div>
        </div>
    )
}

export default Userprofile
