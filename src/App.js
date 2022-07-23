import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Why } from "./Pages/Why";
import Navbar from "react-bootstrap/Navbar";
import { BlogLogo } from "./Components/BlogLogo";
import { BlogNav } from "./Components/BlogNav";
import { JavaScriptDays } from "./Pages/JavaScriptDays";
import { ToolsByMe } from "./Pages/ToolsByMe";
import { AllPosts } from "./Pages/AllPosts";

function App() {
  document.body.style.backgroundImage =
    "linear-gradient(white, white, #3B413C )";

  document.body.style.minHeight = "100vh";
  return (
    <Router>
      <div>
        <Navbar expand="lg" style={{ backgroundColor: "white" }}>
          <BlogLogo />
          <BlogNav />
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/why">
            <Why />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/100daysofjavascript">
            <JavaScriptDays />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/toolsbyme">
            <ToolsByMe />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/allposts">
            <AllPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
