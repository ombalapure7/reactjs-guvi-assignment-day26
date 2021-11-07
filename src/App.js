import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleUser from "./pages/SingleUser";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create">
          <CreateUser />
        </Route>
        <Route path="/users/:id">
          <SingleUser />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
