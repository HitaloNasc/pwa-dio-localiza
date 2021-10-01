import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Post from "./containers/Post";

function App() {
  return (
    <main>
      <section>
        <Router>
          <div>
            <Switch>
              <Route path="/:subject/:id">
                <Post></Post>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  );
}

export default App;
