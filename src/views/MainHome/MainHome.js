import React from "react";
import FooterX from "../../components/elements/Navs/Footer";
import HeaderX from "../../components/elements/Navs/Header";
import BlogSection from "../../components/sections/Blog/BlogSection";
import Categories from "../../components/sections/Categories/Categories";
import CategoriesP2 from "../../components/sections/Categories/CategoriesP2";
import CarouselPage from "../../components/sections/Carousel/Carousel";
import ProjectTeam from "../../components/sections/ProjectTeam/ProjectTeam";
import { auth } from "../../services/firebase";
import "./MainHome.css";
import FeaturedCat from "../../components/sections/FeaturedCat/FeaturedCat";

const MainHome = () => {
  return (
    <div className="Main-App">
      <HeaderX></HeaderX>

      <CarouselPage></CarouselPage>
      <br />
      <br />
      <br />
      <FeaturedCat></FeaturedCat>
      <br />
      <br />
      <br />
      <Categories></Categories>

      <BlogSection></BlogSection>

      <ProjectTeam></ProjectTeam>
      <br />
      <br />
      <br />
      <FooterX></FooterX>
    </div>
  );
};

export default MainHome;
