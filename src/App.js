import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcom from "./components/Navbarcom";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import OurServices from "./components/OurServices";

function App() {
  return (
    // // <Router>
    //   <Navbarcom />
    //   <main>
    //     {/* <Home /> */}
    //     <Routes>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/services" exact component={OurServices} />
    //     </Routes>
    //   </main>

    // </Router>
    <></>
  );
}

export default App;
