import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Background } from "./Components";
import { Home, Login, SignUp, Page404 } from "./Pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "./Components";
import { UserContext, CurrencyContext } from "./Utils";
import axios from "axios";

function App() {
  let localUser = "";
  const User = localStorage.getItem("User");

  const [latestCurrencyRate, setLatestCurrencyRate] = useState<any>([]);

  if (User) {
    localUser = JSON.parse(User);
  }

  useEffect(() => {
    getLatestCurrencyData();
  }, []);

  const getLatestCurrencyData = async () => {
    try {
      const data = await axios.get(
        `https://api.currencyfreaks.com/latest?apikey=49d919ac251e4e9dbcff53775ccfd5f5`
      );
      const obj = data.data.rates;
      const ratesArray = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
      });
      setLatestCurrencyRate(ratesArray);
    } catch (err) {
      console.log(err);
    }
  };

  const [user, setUser] = useState(localUser);
  const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );

  return (
    <UserContext.Provider value={[user, setUser]}>
      <CurrencyContext.Provider value={latestCurrencyRate}>
        <Router>
          <div className="App">
            <Background />
            <Navbar />
            <Layout>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={SignUp} />
                <Route path="*" component={Page404} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </CurrencyContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
