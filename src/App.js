import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/loin">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footert></Footert>
      </BrowserRouter>
    </div>
  );
}

export default App;
