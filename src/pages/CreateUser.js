import { useRef } from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "../context";
import "./CreateUser.css";
import axios from "axios";

const url = "https://614eabf9b4f6d30017b482be.mockapi.io/users";

function CreateUser() {
  const { preventSubmit, fetchUser } = useGlobalContext();
  
  const history = useHistory();
  console.log("Current path:", history.location.pathname);

  /* Create a user */
  const createUser = async (nameRef, imageRef) => {
    const enteredName = nameRef.current.value;
    const enteredImageUrl = imageRef.current.value;

    if (enteredImageUrl === "" || enteredImageUrl === "") {
      console.log("Username and image cannot be null");
      return;
    }

    await axios.post(`${url}`, {
      name: enteredName,
      avatar: enteredImageUrl,
    });

    history.push("/");
    fetchUser();
  };

  /* Store form inputs */
  const nameRef = useRef();
  const imageRef = useRef();

  return (
    <section className="create-form">
      <form onSubmit={preventSubmit}>
        <div className="create-field">
          <label>Name</label>
          <input placeholder="Enter name" ref={nameRef} />
          <label>Image URL</label>
          <input placeholder="Enter image url" ref={imageRef} />
          <button
            className="create-btn"
            onClick={() => createUser(nameRef, imageRef)}
          >
            Create User
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateUser;
