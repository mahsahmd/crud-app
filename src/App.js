import Provider from "./components/Provider";
import Logs from "./components/Logs";
import Techs from "./components/Techs";
import AddLogForm from "./components/AddLogForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Logs />
              <Techs />
            
            </div>
          </Route>
          <Route exact path="/addLog">
            <AddLogForm/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
