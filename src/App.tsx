import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./layout/DashboardLayout/Dashboard";
import { routes } from "./routes";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
});

function App({ user }: any) {
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
                if (route.auth && !user) {
                  return <Redirect to="/login" />;
                }
                return <route.component title={route.title} />;
              }}
            />
          ))}
          <Redirect to="/not-found" />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
