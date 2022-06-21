import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import TimeTable from "./page/TimeTable";
import RecruitmentGuide from "./page/RecruitmentGuide";
import Map from "./page/Map";
import SchoolPhoto from "./page/SchoolPhoto";
import Food from "./page/Food";
import Test from "./page/Test"
import Gym from "./page/Gym"


function App() {
  const[authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("Aaaa", authenticate)
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/TimeTable" element={<TimeTable/>} />
        <Route path="/recruitmentguide" element={<RecruitmentGuide/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/schoolphoto" element={<SchoolPhoto/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/gym" element={<Gym/>} />

      </Routes>
</div>
  );
}

export default App;
