import "./UserCard.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function UserCard({ id, name, avatar }) {
  const { deleteUser } = useGlobalContext();

  return (
    <article className="card">
      <div className="details">
        <img alt={name} src={avatar} className="avatar" />
        <p className="user-name">{name}</p>
        <div className="btn-wrapper">
          <Link to={`/users/${id}`}>
            <button className="view-btn">View</button>
          </Link>
          <button className="delete-btn" onClick={() => {
            deleteUser(id);
          }}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
