import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Nav/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contactus from "./Page/Contactus";
import Myownapi from "./Page/Myownapi";
import Api2 from "./Page/Api2";
import Api3 from "./Page/Api3";
function App() {
  const [myVariable, setMyVariable] = useState({
    sn: "one",
    name: "Roshan",
  });
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/api1" element={<Myownapi />}></Route>
          <Route path="/api2" element={<Api2 />}></Route>
          <Route path="/api3" element={<Api3
           />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
