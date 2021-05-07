import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { authOperations } from "../redux/auth";
import { useDispatch } from "react-redux";
import AppBar from "../components/AppBar/AppBar";
import Loader from "../data/Loader";
import Container from '../components/Conteiner/Container';
import routes from "../routes";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HomePage = lazy(() =>
  import("../views/HomePageView" /* webpackChunkName: "home-view" */)
);
const LoginPage = lazy(() =>
  import("../views/LoginPageView" /* webpackChunkName: "login-view" */)
);
const RegistrationPage = lazy(() =>
  import(
    "../views/RegisterPageView" /* webpackChunkName: "registration-view" */
  )
);
const Contacts = lazy(() =>
  import("../views/ContactsView" /* webpackChunkName: "contacts-view" */)
);



export default function App() {
  const dispatch = useDispatch(); // useDispatch аналог mapDispatchToProps
 
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]); // useEffect аналог componentDidMount - виполняется при каждом рендере

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Container />
        <Switch>
          <Route exact path={routes.home}>
            <HomePage />
          </Route>

          <PublicRoute
            path={routes.registration}
            redirectTo={routes.contacts}
            restricted
          >
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            redirectTo={routes.contacts}
            restricted
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
