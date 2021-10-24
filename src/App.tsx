import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./layout/DashboardLayout/Dashboard";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        <Switch>
          {routes.map((route, index) => (
            <Route
              exact={route.exact}
              path={route.path}
              key={index}
              render={() => {
                if (route.auth) {
                  return <Redirect to="/login" />;
                }
                return <route.component title={route.title} />;
              }}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
