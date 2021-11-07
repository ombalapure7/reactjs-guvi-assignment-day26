import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SingleUser.css";
import { useGlobalContext } from "../context";

const url = "https://614eabf9b4f6d30017b482be.mockapi.io/users";

const SingleUser = () => {
  const history = useHistory();

  // Get a parameter from the URL
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchUser } = useGlobalContext();

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await axios.get(`${url}/${id}`);
        setUser(userData.data);
      } catch (err) {
        console.log("Error while getting single user:", err);
      }
    }

    getUser();
  }, [id]);

  /* Delete user from SingleUser page */
  const deleteUser = async (id) => {
    await axios.delete(`${url}/${id}`);
    history.replace("/");
    fetchUser();
  };

  /* Edit user details */
  const editUser = async (event) => {
    event.preventDefault();
    console.log("Update user");    

    // Extract ref values 
    const enteredName = nameRef.current.value;
    const enteredImageUrl = imageRef.current.value;
  
    if (enteredName === "" || enteredImageUrl === "") {
      console.log("Please entere some new values");
    }

    console.log(enteredName, enteredImageUrl);

    // Send a PUT request
    await axios.put(`${url}/${id}`, {
      name: enteredName,
      avatar: enteredImageUrl
    }); 

    history.replace("/");
    fetchUser();
  }

  /* Show/Hide modal */
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  }

  /* Store form inputs reference */
  const nameRef = useRef();
  const imageRef = useRef();

  return (
    <section className="user-details">
      <div className={`content ${isModalOpen ? "blur-create-form" : ""}`}>
        <div className="img-wrapper">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="user-detail">
          <p><span className="field">ID:</span>{id}</p>
          <p><span className="field">Name:</span>{user.name}</p>
          <p><span className="field">Image URL:</span>{user.avatar}</p>
          <p><span className="field">Created At:</span>{user.createdAt}</p>
        </div>
      </div>
      <div className={`btn-wrapper ${isModalOpen ? "blur-create-form" : ""}`}>
        <button className="edit-btn" onClick={() => modalHandler()}>Edit</button>
        <button className="delete-btn" onClick={() => deleteUser(id)}>Delete</button>
      </div>
      {/* This code is for MODAL */}
      <div className={`modal ${isModalOpen? "": "hide-modal"}`}>
        <div className="modal-content">
          <label htmlFor="edit-username">Name</label>
          <input name="edit-username" type="text" ref={nameRef} placeholder={user.name} />
          <label htmlFor="edit-img">Image URL</label>
          <input name="edit-img" type="text" ref={imageRef} placeholder={user.avatar} />
        </div>
        <div className="edit-form-btn-wrapper">
          <button className="edit-form-edit-btn" onClick={(event) => editUser(event)}>Edit User</button>
          <button className="edit-form-close-btn" onClick={() => modalHandler()}>Close Form</button>
        </div>
      </div>
      <Link to="/" className="back-btn" >
        Back Home
      </Link>
    </section>
  );
};

export default SingleUser;
