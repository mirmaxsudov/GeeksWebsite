import Nav from "./components/nav/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;