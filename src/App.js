import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Snippets from "./Components/Snippets";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Projects" Component={Projects} />
          <Route exact path="/AboutMe" Component={AboutMe} />
          <Route exact path="/Snippets" Component={Snippets} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
