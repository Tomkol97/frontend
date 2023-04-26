import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { publicRequest } from "../requestMethods";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Categories />
      <Slider />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
