import React from "react";
import hero from "../assets/herosection/hero.mp4";
import ServiceCard from "../cards/ServiceCard";
import CybersecurityImage from "../assets/Images/techImage/cybersecurity.jpeg";
import MobileImage from "../assets/Images/techImage/mobileappdevelopment.jpeg";
import cloudappImage from "../assets/Images/techImage/cloudappdevelopment.jpeg";
import HireteamsImage from "../assets/Images/techImage/Hireteams.jpeg";
import SoftwareImage from "../assets/Images/techImage/Softwaredevelopment.jpeg";
import { useInViewOnce } from "../ViewOnce";
import SalesforceImage from "../assets/Images/techImage/salesforcedevelopment.jpeg";
import TestingImage from "../assets/Images/techImage/Testing.jpeg";
import Discussion from "../Components/Discussion";

const Home = () => {
  const [refHeadingAbout, visibleHeadingAbout] = useInViewOnce();
  const [refParaAbout, visibleParaAbout] = useInViewOnce();
  const [refHeadingServices, visibleHeadingServices] = useInViewOnce();
  const [refCards, visibleCards] = useInViewOnce();

  const serviceData = [
    { tech: "Cyber Security", techImage: CybersecurityImage },
    { tech: "Mobile App Development", techImage: MobileImage },
    { tech: "Cloud App Development", techImage: cloudappImage },
    { tech: "Hire Teams", techImage: HireteamsImage },
    { tech: "Software Development", techImage: SoftwareImage },
    { tech: "Salesforce App Development", techImage: SalesforceImage },
    { tech: "Testing & QA", techImage: TestingImage },
  ];

  return (
    <div className="bg-[#0a001f]">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden  ">
        <video
          src={hero}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center">
          <div className="max-w-5xl space-y-8">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
              From Vision to Execution – Elite IT Consulting, World-Class Design
              & Reliable Development
            </h1>
            <p className="text-white text-lg sm:text-xl">
              At our company, we believe in the power of creativity and
              collaboration. Our mission is to deliver tailored solutions that
              drive success for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full px-4 py-12 flex justify-center items-center bg-[#0a001f]">
        <div className="max-w-6xl p-6 flex flex-col items-center gap-8 ">
          <h1
            ref={refHeadingAbout}
            className={`text-white text-2xl sm:text-3xl md:text-4xl md:max-w-2xl font-bold text-center ${
              visibleHeadingAbout ? "text-appear" : "opacity-0"
            }`}
          >
            Accelerate Business Growth While Reducing Operational Costs
          </h1>
          <p
            ref={refParaAbout}
            className={`text-gray-300 text-sm sm:text-base md:text-lg text-justify ${
              visibleParaAbout ? "text-appear" : "opacity-0"
            }`}
          >
            InlighnX Global is a trusted software development company
            offering end-to-end solutions — from intuitive product design to
            seamless development, delivery, and launch. We specialize in
            creating robust web and mobile applications tailored to help you
            achieve your business goals efficiently.
            <br />
            <br />
            Our expertise spans across custom software development, web
            application development, mobile app development, and more. We also
            provide comprehensive Software Consulting and Development Services
            to transform your business through powerful, adaptable, and
            future-ready digital solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 flex flex-col items-center gap-6 mb-10 bg-[#0a001f]">
        <h1
          ref={refHeadingServices}
          className={`text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center ${
            visibleHeadingServices ? "text-appear" : "opacity-0"
          }`}
        >
          Services We Offer
        </h1>
        <div
          ref={refCards}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mt-4 ${
            visibleCards ? "text-appear" : "opacity-0"
          }`}
        >
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              tech={item.tech}
              techImage={item.techImage}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Discussion />
    </div>
  );
};

export default Home;
