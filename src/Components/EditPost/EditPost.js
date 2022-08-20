import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { db, storage } from "../../firebase/config";
import { PostContext } from "../../store/PostContext";
import Loading from '../Loading/Loading'
import "./editPost.css";

const categoryArr = [
  "Cars",
  "Motorcycle",
  "Mobile",
  "Electronics",
  "Furniture",
];

function EditPost() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState({
    nameErr: false,
    priceErr: false,
    categoryErr: false,
    imageErr: false,
  });

  const {prodid} = useParams();

  const navigate = useNavigate();

  const {isLoading, setIsLoading} = useContext(PostContext);

  const deleteImage = () => {
    const imgRef = ref(storage, url);
    console.log("delete");
    console.log(imgRef._location);
    deleteObject(imgRef)
      .then(() => {
        setUrl('');
      })
      .catch((err) => {
        console.log(err);
      });
      setIsDeleted(true);
  };

  const addNewImageAndGetLink = () => {
    console.log("image",image.name);
    if(image == ''){
      return url;
    }
    const storageRef = ref(storage, `image/${image.name}`);
    const URL = uploadBytes(storageRef, image).then(() => {
      const img = getDownloadURL(ref(storageRef)).then((imgUrl) => {
        console.log(imgUrl);
        setIsDeleted(false);
        return imgUrl
      });
      return img;
    });
    return URL;
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    setIsLoading(true);
    if (name == "") {
      setError({ ...error, nameErr: true });
      return;
    } else if (price == "") {
      setError({ ...error, priceErr: true });
      return;
    } else if (category == "") {
      setError({ ...error, categoryErr: true });
      return;
    } else if (image == "" && url == '') {
      setError({ ...error, imageErr: true });
      return;
    } else {
      setError({
        nameErr: false,
        priceErr: false,
        categoryErr: false,
        imageErr: false,
      });
    }
    const Url = await addNewImageAndGetLink()

    const data = {
      Category: category,
      Name: name,
      Price: price,
      url: Url,
    };
    const docRef =await doc(db, "products", prodid);
    console.log(url);
    setDoc(docRef, data, { merge: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setIsLoading(false);
      navigate('/');
  };

  useEffect(async() => {
    setIsLoading(true);
    const docRef = doc(db, "products", prodid);
    const data = await getDoc(docRef).then((res)=>{
      return res.data();
    });
    setName(data.Name);
    setCategory(data.Category);
    setPrice(data.Price);
    setUrl(data.url);
    setIsLoading(false)
  }, [])
  
  return (
    <div className="edit-container">
      {isLoading ? <Loading /> :null}
      <div className="edit-card">
        <div className="edit-left-section">
          <div className="edit-image-div">
            <img src={image ? URL.createObjectURL(image) : url} alt="product" />
            <div className="edit-delete-image-btn"
            onClick={deleteImage}>delete</div>
          </div>
          <div className="edit-image-input"
          style={{border: `solid 1px ${isDeleted ? "#b5b5b5" : "#e0e0e0"}`}}
          >
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill={isDeleted ? "#b5b5b5" : "#e0e0e0"}
              >
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
              </svg>
              <input type="file" id="file" disabled={!isDeleted}
              onChange={(event)=>{
                console.log(event.target.files[0]);
                setImage(event.target.files[0])
              }} />
            </label>
            {error.imageErr && <span className="error">add a image</span>}
          </div>
        </div>
        <div className="edit-right-section">
          <div>
            <form action="">
              <label>
                Product Name
                <br />
                {error.nameErr && (
                  <span className="error">product name is required</span>
                )}
                <input type="text" value={name}
                onChange={(event)=>{
                  setName(event.target.value)
                }} />
              </label>
              <br />
              <label>
                Category
                <br />
                {error.categoryErr && (
                  <span className="error">category is required</span>
                )}
                <br />
                <select value={category}
                onChange={(event)=>{
                  setCategory(event.target.value)
                }}>
                  {categoryArr.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              </label>
              <br />
              <label>
                Price
                <br />
                {error.priceErr && (
                  <span className="error">price is required</span>
                )}
                <input type="number" value={price}
                onChange={(event)=>{
                  setPrice(event.target.value)
                }} />
              </label>
              <br />
              <button className="edit-button" type="submit"
              onClick={handleSubmit}>
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
