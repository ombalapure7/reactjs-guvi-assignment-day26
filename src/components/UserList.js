import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
import UserCard from "./UserCard";
import "./UserList.css";

function UserList() {
  const { users, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (users.length < 1) {
    return (
      <p style={{ fontSize: "3rem",
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem" }}>
        No users to display...
      </p>
    );
  }

  return (
    <section className="user-list">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </section>
  );
}

export default UserList;
