import React from 'react';
import teamicon from "../assets/Images/icons/teamicon.jpeg";
import customericon from "../assets/Images/icons/customericon.jpeg";
import commitmenticon from "../assets/Images/icons/commitmenticon.jpeg";
import offsoreicon from "../assets/Images/icons/offsoreicon.jpeg";
import relationicon from "../assets/Images/icons/relationicon.jpeg";
import BenefitCard from '../cards/BenefitCard';
import { useInViewOnce } from '../ViewOnce'; // assuming you already have this hook

const About = () => {
  const [refTitle, titleVisible] = useInViewOnce();
  const [refGrid, gridVisible] = useInViewOnce();
  const [refHighlight, highlightVisible] = useInViewOnce();

  const customerBenefits = [
    { Benefits: "Seasoned Management Team", icons: teamicon },
    { Benefits: "Commitment to Quality", icons: customericon },
    { Benefits: "Flexible Customer Engagement Models", icons: commitmenticon },
    { Benefits: "Strong Offshore Software Development Processes", icons: offsoreicon },
    { Benefits: "Global Vision, Strategies and Values for Building and Nurturing Relationships", icons: relationicon },
  ];

  return (
    <div className="w-full pt-[120px] px-4 md:px-10 bg-[#0a001f]">
      {/* Heading */}
      <div
        ref={refTitle}
        className={`w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 mb-8 transition-all duration-700 ${
          titleVisible ? 'text-appear' : 'opacity-0 -translate-x-12'
        }`}
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          While Working with Us Our Customers Get
        </h1>
      </div>

      {/* Benefits Grid */}
      <div
        ref={refGrid}
        className={`w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-700 ${
          gridVisible ? 'text-appear' : 'opacity-0 -translate-x-12'
        }`}
      >
        {customerBenefits.map((item, index) => (
          <BenefitCard
            key={index}
            Benefits={item.Benefits}
            icons={item.icons}
          />
        ))}
      </div>

      {/* Highlight Section */}
      <div
        ref={refHighlight}
        className={` max-w-7xl mx-auto mt-12 p-6 sm:p-10 flex justify-center items-center bg-linear-to-t from-sky-900 to-indigo-900 rounded shadow-sm transition-all duration-700 ${
          highlightVisible ? 'text-appear' : 'opacity-0 -translate-x-12'
        }`}
      >
        <p className="text-center text-sm sm:text-lg md:text-xl font-semibold text-white">
             OUR UNIQUE MODEL PROVIDES GREATER CERTAINTY OF SUCCESS AND BETTER VALUE THAN ANY OTHER OPTION
        </p>
      </div>
    </div>
  );
};

export default About;
