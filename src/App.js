// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Footert from "./Component/Footer/Footert";
import Services from "./Component/Services.js/Services";
import ServiceDetails from "./Component/ServiceDetails/ServiceDetails";
import Doctors from "./Component/Doctors/Doctors";
import Appoinment from "./Component/Appoinment/Appoinment";
import Login from "./Component/Login/Login";
import Register from "./Component/Regester/Register";
import Notfound from "./Component/404/Notfound";
import ProcessDone from "./Component/ProcessDone/ProcessDone";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route exact path="/done">
              <ProcessDone></ProcessDone>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footert></Footert>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
