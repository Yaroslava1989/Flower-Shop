import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {Route, Routes} from "react-router-dom";
import Wholesale from "./components/prise/wholesale/Wholesale";
import Retail from "./components/prise/retail/Retail";
import Shopmap from "./components/map/Shopmap";
import SaleContainer from "./components/sale/SaleContainer";
import EventContainer from "./components/floristics/event/EventContainer";
import WedingContainer from "./components/floristics/weding/WedingContainer";


function App(props) {

  return (
      <div className="App">
        <Header />
        <Footer/>
            <Routes>
                <Route exact path="/" element={<Content/>}/>
                <Route path="/content" element={<Content/>}/>
                <Route path="/wholesale" element={<Wholesale/>}/>
                <Route path="/retail" element={<Retail/>}/>
                <Route path="/sale" element={<SaleContainer/>}/>
                <Route path="/shopmap" element={<Shopmap/>}/>
                <Route path="/events" element={<EventContainer/>}/>
                <Route path="/weding" element={<WedingContainer />}/>
            </Routes>
      </div>
  )
}

export default App;



