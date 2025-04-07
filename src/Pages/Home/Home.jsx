import React from "react";
import Banner from "./Banner";
import About from "../About";
import Service from "../Service";
import WorkStation from "./WorkStation";
import OurServices from "../OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      {/* <Service></Service> */}
      <div id="" >
       <div className="w-[90%] mx-auto py-16  "> <OurServices></OurServices></div>
      </div>
      <div id="bgImage">
      <WorkStation></WorkStation>
      </div>
    </div>
  );
};

export default Home;
