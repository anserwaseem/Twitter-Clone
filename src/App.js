import Tweet from "./Tweet";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "./Post";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/post" element={<Post />} />
          {/* render={(props) => <Post {...props} />}  */}
          <Route path="/tweet" element={<Tweet />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
