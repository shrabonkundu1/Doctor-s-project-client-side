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
      <div className="w-[90%] mx-auto my-24 mb-36">
        <OurServices></OurServices>
      </div>
      <WorkStation></WorkStation>
    </div>
  );
};

export default Home;
