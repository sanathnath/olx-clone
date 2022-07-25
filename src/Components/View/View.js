import React, { useContext, useEffect, useState } from 'react'
import { query,where,getDocs } from 'firebase/firestore'
import { colref_user } from '../../firebase/config'
import { PostContext } from '../../store/PostContext'

import './View.css'

function View() {
  const [UserDetails, setUserDetails] = useState()
  const {PostDetails} = useContext(PostContext)
  
  useEffect(() => {
    const {userId} = PostDetails;
    const q = query(colref_user, where("id", "==", userId));

    getDocs(q).then((snapshot)=>{
      snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserDetails(doc.data());
        
      });
      
      
    })
  
  },[])
  console.log(UserDetails);
    return (
        <div className='viewParentDiv' >
            <div className="imageShowDiv">
                <img src={PostDetails.url} alt="product" />
            </div>
            <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.Price} </p>
          <span>{PostDetails.Name}</span>
          <p>{PostDetails.Category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
        { UserDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p> {UserDetails.username}</p>
          <p>{UserDetails.phone}</p>
        </div>
         }
      </div>
        </div>
    )
}

export default View
