import React from 'react';
import TechCard from '../../cards/TechCard';
import Discussion from '../../Components/Discussion';
import TestingCard from '../../cards/TestingCard';
import projecticon from '../../assets/Images/techImage/projecticon.jpg'
import salesforceicon from '../../assets/Images/techImage/salesforceicon.jpg'

const SalesforceAppDevelopment = () => {
  const TestingData = [
    {
      TestingImage: projecticon,
      TestingHeading: "End-to-End Project Execution",
      TestingContent: [
        "Business Consulting & Salesforce Implementation Strategy: Empower your business with expert consulting and tailored Salesforce strategies that align with your goals and accelerate digital transformation.",
        "System Integration & Third-Party Solution Connectivity: Seamlessly connect your Salesforce ecosystem with internal systems and external third-party platforms for unified and efficient operations.",
        "Salesforce & Force.com Development: Leverage our deep expertise in Salesforce.com and Force.com to build scalable, high-performance applications customized to your unique business needs.",
        "Salesforce Configuration Services: Optimize your Salesforce environment with smart configurations that enhance user experience, productivity, and system efficiency.",
        "Ongoing Support & Maintenance Services: Ensure consistent performance and reliability with our proactive support services, covering system updates, troubleshooting, and enhancements.",
        "Custom API Development for Direct Salesforce Integration: Extend your system’s capabilities with secure and robust custom APIs designed to enable real-time, direct integration with Salesforce."
      ],
    },
    {
      TestingImage: salesforceicon,
      TestingHeading: "Seamless Salesforce Migration Solutions",
      TestingContent: [
        "Seamless Migration to Salesforce.com with Minimal Disruption and Maximum Efficiency",
        "Reliable Product Support & Maintenance to Ensure Performance and Business Continuity",
        "Smart Data De-duplication & Cleansing for Clean, Accurate, and Actionable Insights.",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#0a001f]">
      {/* Header Section */}
      <section className="w-full px-4 py-12 mt-[50px] flex justify-center">
        <div className="w-full max-w-6xl p-4 sm:p-6 md:p-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight">
            Salesforce App Development
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            At Clariquent Technologies, we empower businesses by aligning their IT strategy with core business goals—maximizing the value of your technology investments. Our seasoned experts deliver transformational impact through strategic consulting and hands-on implementation, helping organizations achieve agility, efficiency, and growth.
            <br /><br />
            We specialize in crafting and executing robust Cloud Strategies, and offer comprehensive Salesforce Consulting, Implementation, and Integration services, including seamless application migration. Whether you're just starting or scaling your Salesforce journey, we help you plan, design, and implement complete Salesforce-based solutions tailored to your unique business needs.
            <br /><br />
            Our end-to-end service offerings, backed by deep domain expertise and a rich library of accelerators, drive real organizational change and significantly enhance user adoption. From strategic vision to technical execution, Clariquent Technologies is your trusted partner in digital transformation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 flex flex-col items-center gap-10 mb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Solutions Designed for your success
        </h2>

        <div className="grid grid-cols-1  gap-6 max-w-6xl w-full text-appear">
          {TestingData.map((item, index) => (
            <TestingCard
              key={index}
              TestingHeading={item.TestingHeading}
              TestingContent={item.TestingContent}
              TestingImage={item.TestingImage}
            />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechCard />

      {/* Discussion Section */}
      <Discussion />
    </div>
  );
};

export default SalesforceAppDevelopment;
