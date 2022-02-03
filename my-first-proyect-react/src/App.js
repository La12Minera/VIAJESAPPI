import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Detail from "./Components/Pages/Detail";
import Profile from "./Components/Pages/Profile";

import Navbar from "./Components/Navbar";

function App() {
  console.log(1);

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/profile/:id" component={Detail} exact />
      </Switch>

      <footer>Esto es el footer</footer>
    </BrowserRouter>
  );
}

export default App;
