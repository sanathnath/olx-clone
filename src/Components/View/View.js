import React, { useEffect, useState } from "react";
import { query, where, getDoc, doc, getDocs } from "firebase/firestore";
import { colref_user } from "../../firebase/config";
import { db } from "../../firebase/config";

import "./View.css";
import { useParams } from "react-router";

function View() {
  const [UserDetails, setUserDetails] = useState("");
  const [postDetails, setPostDetails] = useState("");

  const { prodid } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", prodid);

    getDoc(docRef).then((res) => {
      const data = res.data();
      setPostDetails(data);

      const q = query(colref_user, where("id", "==", data.userId));

      getDocs(q).then((snapshot) => {
        snapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setUserDetails(doc.data());
        });
      });
    });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="product" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price} </p>
          <span>{postDetails.Name}</span>
          <p>{postDetails.Category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {UserDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p> {UserDetails.username}</p>
            <p>{UserDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
