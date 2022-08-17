import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AboutMe from "./aboutMe";
import Contact from "./Contact";
import NoPage from "./noPage";
import MyClock from "./clock";


export default function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Clock" element={<MyClock />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));