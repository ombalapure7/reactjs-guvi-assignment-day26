import { useRef } from "react";
import { useGlobalContext } from "../context";
import "./Jumbotron.css";

function Jumbotron() {
  const { preventSubmit, setSearchValue } = useGlobalContext();
  const searchInput = useRef();

  function searchUser() {
    console.log("Search for this username:", searchInput.current.value);
    setSearchValue(searchInput.current.value);
  }

  return (
    <section className="jumbotron">
      <form className="form" onSubmit={preventSubmit}>
        <p className="jumbotron-title">Enter name to search a user</p>
        <div className="content">
          <input
            className="input"
            type="text"
            placeholder="Search user..."
            ref={searchInput}
          />
          <button className="btn" onClick={searchUser}>Search</button>
        </div>
      </form>
    </section>
  );
}

export default Jumbotron;
