import Navbar from "./component/Wrapper/Navbar";
import "./component/Wrapper/wrapper.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Route path="/"></Route>
        <Route path="/toolCommon">Tool Common</Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
