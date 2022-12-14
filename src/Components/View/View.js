import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from '../../store/Context';
import { PostContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState("");
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  const history =useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
        history.push('/')
    }
},[])
  useEffect(() => {
    console.log("dfsdddddh");
    console.log(postDetails);
    const { userId } = postDetails;
    console.log(userId);
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get().then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  },[]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
    
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
 
      </div>
    </div>
  );
}
export default View;
