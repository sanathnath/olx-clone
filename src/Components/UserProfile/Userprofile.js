import { getDocs } from "firebase/firestore";
import React, { useEffect, useContext, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { colref_prod, colref_user } from "../../firebase/config";
import { AuthContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import Loading from "../Loading/Loading";

import "./UserProfile.css";

function Userprofile() {
  const [myProd, setMyProd] = useState([]);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useContext(PostContext);

  const { userid } = useParams();

  useEffect(async () => {
    setIsLoading(true);
    const myPosts = await getDocs(colref_prod).then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      const myPosts = allPost.filter((post) => {
        return post.userId === userid ? post : null;
      });
      return myPosts
    });
    setMyProd(myPosts);

    getDocs(colref_user).then((snapshot) => {
      const allUser = snapshot.docs.map((u) => {
        return {
          ...u.data(),
        };
      });
      const singleUser = allUser.filter((u) => {
        if (u.id === userid) {
          return u;
        }
      });
      setUser(singleUser[0]);
    });

    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="profileMain">
          <div className="sidePanel">
            <div className="profile-avatar"></div>
            <div className="sidePanel_content">
              <h4>{user.username}</h4>
              {/* <span>{user.email}</span> */}
            </div>
          </div>

          <div className="right_mainPanel">
            <div className="cards">
              {myProd.map((item) => {
                return (
                  <div
                    className="card"
                    key={item.id}
                    onClick={() => {
                      // setPostDetails(item);
                      navigate(`/edit/${item.id}`);
                    }}
                  >
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
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Userprofile;
