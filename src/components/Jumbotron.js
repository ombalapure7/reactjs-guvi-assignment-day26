import { useRef } from "react";
import { useGlobalContext } from "../context";
import "./Jumbotron.css";
import { AiOutlineClear } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


function Jumbotron() {
  const { preventSubmit, setSearchValue, fetchUser } = useGlobalContext();
  const searchInput = useRef();

  function searchUser() {
    console.log("Search for this username:", searchInput.current.value);
    setSearchValue(searchInput.current.value);
  }

  function clearSearchBar() {
    console.log("Search input cleared...");
    if (!(searchInput.current.value === "")) {
      console.log("Nothing to clear...");
      fetchUser();
    }
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
          <button className="btn" onClick={searchUser}><BsSearch/></button>
          <button className="btn-clear" onClick={clearSearchBar}><AiOutlineClear/></button>
        </div>
      </form>
    </section>
  );
}

export default Jumbotron;
