import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Actor from "./Actor";
import Film from "./Film";
import NoPage from "./NoPage";
import MyClock from "./clock";
import "bootstrap/dist/css/bootstrap.css";
import './css/index.css';
export default function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Actor" element={<Actor />} />
            <Route path="Film" element={<Film />} />
            <Route path="Clock" element={<MyClock />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));