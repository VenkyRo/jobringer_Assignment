import React from "react";
import NavBar from "../components/NavBar";

import BannerDispaly from "../components/BannerDispaly";


import JobSearchLayout from "../components/JobSearchLayout";
import FeatureJobDisplay from "../components/FeatureJobDisplay";
import RemoteJobDisplay from "../components/RemoteJobDisplay";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="body-part">
        <BannerDispaly></BannerDispaly>
        <JobSearchLayout></JobSearchLayout>
        <FeatureJobDisplay></FeatureJobDisplay>
        <RemoteJobDisplay></RemoteJobDisplay>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
