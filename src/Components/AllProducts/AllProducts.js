import { getDocs, query, where } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/Heart";
import { CategoryContext } from "../../store/CategoryContext";
import { colref_prod } from "../../firebase/config";
import { PostContext } from "../../store/PostContext";
import { SearchContext } from "../../store/SearchContext";

import "./AllProducts.css";

function AllProducts() {
  const [IsSubCat, setIsSubCat] = useState(true);
  const [CategoryProd, setCategoryProd] = useState([]);
  const { Catgry } = useContext(CategoryContext);
  const { setPostDetails } = useContext(PostContext);
  const { SearchInput } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
  if (Catgry !== "") {
    const q = query(colref_prod, where("Category", "==", Catgry));
    getDocs(q).then((snapshot) => {
      const items = snapshot.docs.map((prod) => {
        return {
          ...prod.data(),
          id: prod.id,
        };
      });
      setCategoryProd(items);
    });
  } else if (SearchInput !== "") {
    getDocs(colref_prod).then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      const searchPosts = allPost.filter((post) => {
        return Object.values(post)
          .join(" ")
          .toLowerCase()
          .includes(SearchInput.toLowerCase());
      });
      setCategoryProd(searchPosts);
    });
  }
  },[])

  return (
    <div className="product-parent">
      <div>
        <h4>
          <strong> India Free Classified </strong>
        </h4>
      </div>
      <div className="product">
        <div className="left-category">
          <div
            className="left-cat-head"
            onClick={() => {
              setIsSubCat(!IsSubCat);
            }}
          >
            <h5>
              <strong>CATEGORIES</strong>
            </h5>
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              fillRule="evenodd"
            >
              <path
                className="rui-4K4Y7"
                d="M85.392 746.667h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-408.981-409.003h-35.307l-409.045 409.003z"
              ></path>
            </svg>
          </div>
          <div
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
              paddingBottom: "25px",
            }}
          >
            {!IsSubCat && <span>{Catgry}</span>}
            {IsSubCat && (
              <div>
                <div className="left-main-cat">
                  <div className="minus-icon">
                    <div className="minus"></div>
                  </div>
                  <span>
                    <strong>All Categories</strong>
                  </span>
                </div>
                <div className="sub-cat">
                  <div className="left-main-cat">
                    <div className="minus-icon">
                      <div className="minus"></div>
                    </div>
                    <span>
                      <strong>{Catgry}</strong>
                    </span>
                  </div>
                  <ul>
                    <li>Mobile Phones</li>
                    <li>Tablets</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="items">
          <div className="heading">
            <h6>Fresh Recommentation</h6>
          </div>
          <div className="cards">
            {CategoryProd.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => {
                    setPostDetails(item);
                    navigate(`/view/${item.id}`);
                  }}
                >
                  <div className="favorite">
                    <Heart />
                  </div>
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
    </div>
  );
}

export default AllProducts;
