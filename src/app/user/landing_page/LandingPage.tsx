"use client";
import React from "react";
import Navbar from "./navbar/Navbar";
import Navlinks from "./navlinks/NavLinks";
import Slider from "./slider-banner/Slider";
import RecipeReviewCard from "./car-cards/page";
import CarBrands from "./car-brands/page";
import CarOffers from "./car-offers/page";
import LuxSports from "./lux_spor_cars/page";
import SuvCars from "./suv_cars/page";
import ReqDocs from "./req_docs/page";
import CustomizedAccordions from "./accordion/page";
import Testimonials from "./testimonials/page";
import CompanyOverview from "./compoverview/page";
import Footer from "./footer/page";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Navlinks />
      <Slider />
      <RecipeReviewCard />
      <CarBrands />
      <CarOffers />
      <LuxSports />
      <SuvCars />
      <ReqDocs />
      <CustomizedAccordions />
      <Testimonials />
      <CompanyOverview />
      <Footer />
    </>
  );
};

export default LandingPage;
