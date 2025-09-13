import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarbonFootprint from "./components/CarbonFootprint";
import SustainableDevelopmentGoalsPage from "./components/SustainableDevelopmentGoalsPage";
import UserProfile from "./components/UserProfile";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 200px)", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/carbon" component={CarbonFootprint} />
          <Route
            path="/sustainable-development-goals"
            component={SustainableDevelopmentGoalsPage}
          />
          <Route path="/userprofile" component={UserProfile} />
          <Route
            path="/home"
            render={(props) => <Dashboard {...props} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            render={(props) => <Cart {...props} cart={cart} setCart={setCart} />}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
