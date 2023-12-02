import Home from "./components/Pages/Home";
import Transaction from "./components/Pages/Transaction";
import Data from "./components/Pages/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/transaction" element={<Transaction />}></Route>
          <Route path="/data" element={<Data />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
