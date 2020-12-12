import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "./Component/Home";
export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar></Navbar>
      <Route path="/"  component={Home}></Route>
      <Route path="/id"  component={Home}></Route>
    </Router>
    </div>
  );
}


