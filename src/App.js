import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QrReader from "react-qr-reader";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <div>
      Escanee su codigo qr aqui
      <QrReader
        delay={300}
        onError={() => console.log("b")}
        onScan={(data) => data !== null && alert(data)}
        style={{ width: "100%" }}
      />
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
