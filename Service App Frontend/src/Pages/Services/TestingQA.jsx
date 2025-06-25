import React from 'react';
import TechCard from '../../cards/TechCard';
import TestingCard from '../../cards/TestingCard';
import Discussion from '../../Components/Discussion';
import { useInViewOnce } from '../../ViewOnce'; // Import the custom hook

import functionicon from '../../assets/Images/icons/functionicon.jpg';
import securityicon from '../../assets/Images/icons/securityicon.jpg';
import mobiletesticon from '../../assets/Images/icons/mobiletesticon.jpg';
import cloudicon from '../../assets/Images/icons/cloudicon.jpg';
import performancetesticon from '../../assets/Images/icons/performancetesticon.jpg';
import testingicon from '../../assets/Images/icons/testingicon.jpg';
import enterpriseicon from '../../assets/Images/icons/enterpriseicon.jpg';
import testmanageicon from '../../assets/Images/icons/testmanageicon.jpg';

const TestingQA = () => {
  const [refHeader, headerVisible] = useInViewOnce();
  const [refServices, servicesVisible] = useInViewOnce();
  const [refTech, techVisible] = useInViewOnce();
  const [refDiscussion, discussionVisible] = useInViewOnce();

  const TestingData = [
    {
      TestingImage: functionicon,
      TestingHeading: 'Functional Testing',
      TestingContent: [
        'Progression Testing',
        'Regression Testing',
        'Free-form and Negative Testing',
        'Compatibility Testing for Different Browsers',
      ],
    },
    {
      TestingImage: securityicon,
      TestingHeading: 'Security Testing',
      TestingContent: [
        'Vulnerability Assessment and Comprehensive Penetration Tests',
        'Application Penetration Tests',
        'Source Code Audits',
      ],
    },
    {
      TestingImage: mobiletesticon,
      TestingHeading: 'Mobile Testing',
      TestingContent: [
        'Cross Device Verification',
        'Performance and Security Testing',
        'Test Automation',
      ],
    },
    {
      TestingImage: cloudicon,
      TestingHeading: 'Cloud Testing',
      TestingContent: [
        'Cloud Migration Testing',
        'Cloud Application Testing',
        'Saas, PaaS, LaaS',
      ],
    },
    {
      TestingImage: performancetesticon,
      TestingHeading: 'Performance Testing',
      TestingContent: [
        'Performance Strategy',
        'Load/ Stress/ Endurance Testing',
        'Performance Modeling',
        'Capacity Planning',
      ],
    },
    {
      TestingImage: testingicon,
      TestingHeading: 'Test Automation and Optimization',
      TestingContent: [
        'Regression Test Automation',
        'Automation Framework Implementation',
        'Managed Test Optimization',
      ],
    },
    {
      TestingImage: enterpriseicon,
      TestingHeading: 'Enterprise Testing and QA',
      TestingContent: [
        'Application Portfolio Quality Management',
        'Functional and Non Functional Quality Governance',
        'Quality Dashboards',
      ],
    },
    {
      TestingImage: testmanageicon,
      TestingHeading: 'Test Management',
      TestingContent: [
        'Planning and Tracking',
        'Communication Plan',
        'SLA Management',
        'Metrics, Measurement and Reporting',
        'Quality Management',
        'Reviews – Plan, Estimate',
        'Personnel Management',
      ],
    },
  ];

  return (
    <div className="w-full bg-[#0a001f]">
      {/* Header */}
      <section
        ref={refHeader}
        className={`w-full px-4 py-12 mt-[50px] flex justify-center transition-all duration-700 ${
          headerVisible ? 'animate-fade-up' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="w-full max-w-6xl p-4 sm:p-6 md:p-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight">
            Testing & QA
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            At Clariquent Technologies, we deliver comprehensive Software Testing Services designed to elevate the quality and reliability of your applications. From functional verification to end-to-end testing, defect management, business flow validation, and usability testing, our testing solutions are tailored to ensure flawless user experiences and business outcomes.
            <br />
            <br />
            With proven expertise across diverse application domains, we have built specialized testing frameworks that ensure consistency, speed, and accuracy. Our Testing Centre of Excellence (TCoE) unifies key assets — including processes, infrastructure, tools, and skilled professionals — under a strategic, agile framework that drives operational efficiency, enhances team productivity, and significantly improves product quality.
            <br />
            <br />
            Whether you're launching a new product or optimizing an existing platform, Clariquent Technologies ensures your software performs perfectly — every time, on every platform.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 flex flex-col items-center gap-10 mb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Solutions Designed for your success
        </h2>

        <div
          ref={refServices}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full transition-all duration-700 ${
            servicesVisible ? 'animate-fade-left' : 'opacity-0 -translate-x-12'
          }`}
        >
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
      <div
        ref={refTech}
        className={`transition-all duration-700 ${
          techVisible ? 'animate-fade-up' : 'opacity-0 translate-y-12'
        }`}
      >
        <TechCard />
      </div>

      {/* Discussion Section */}
      <div
        ref={refDiscussion}
        className={`transition-all duration-700 ${
          discussionVisible ? 'animate-fade-up' : 'opacity-0 translate-y-12'
        }`}
      >
        <Discussion />
      </div>
    </div>
  );
};

export default TestingQA;
