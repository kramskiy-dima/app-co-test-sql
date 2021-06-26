import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./routes";

import "./sass/main.scss";

import Main from "./views/Main";
import Users from "./views/Users";
import User from "./views/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={routes.main} component={Main} />
          <Route exact path={routes.users} component={Users} />
          <Route path={routes.user} component={User} />
          <Redirect to={routes.main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
