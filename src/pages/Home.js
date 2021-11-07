import { useHistory } from "react-router";
import Jumbotron from "../components/Jumbotron";
import UserList from "../components/UserList";

function Home() {
  const history = useHistory();
  console.log("Current path:", history.location.pathname);

  return (
    <div>
      <Jumbotron />
      <UserList />
    </div>
  );
}

export default Home;
