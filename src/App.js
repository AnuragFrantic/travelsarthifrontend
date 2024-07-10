// import {Button} from '@mui/material';
import { Main } from "./components/HomePage/Main";
import { Route, Routes } from "react-router-dom";


import './App.css';
import './css/blog.css'





import Hotels from "./Pages/Hotels";
import Hoteldetail from "./Pages/Hoteldetail";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modaltake from "./Pages/Modaltake";
import Blog from "./Pages/Blog";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import RefundPolicy from "./Pages/RefundPolicy";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/modal" exact element={<Modaltake />} />
        <Route path="/package">
          <Route path=":id" element={<Hotels />} />
        </Route>


        <Route path="/hotelsdetail">
          <Route path=":id/:unique" element={<Hoteldetail />} />
        </Route>

        <Route path="/blog" exact element={<Blog />} />
        <Route path="/refund-policy" exact element={<RefundPolicy />} />

        <Route path="/contact" exact element={<Contact />} />

        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/gallery">
          <Route path=":id/:unique" element={<Gallery />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
