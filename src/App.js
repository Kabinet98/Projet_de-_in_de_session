import "./App.css";
import Home from "./Components/Home";
import UserInfo from "./Components/UserInfo";
import File from "./Components/File";
import Error404 from "./Components/Error404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userInfo" component={UserInfo} />
          <Route path="/fileDescription/:key" component={File} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
