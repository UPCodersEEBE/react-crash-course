import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";
import Repositories from "./screens/Repositories";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/repos">
            <Repositories />
          </Route>
          <Route>
            <div className="title">error</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
