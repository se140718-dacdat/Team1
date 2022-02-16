import Navbar from "./component/Wrapper/Navbar";
import './component/Wrapper/wrapper.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/">All courses</Route>
          <Route path="/toolCommon">Tool Common</Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
