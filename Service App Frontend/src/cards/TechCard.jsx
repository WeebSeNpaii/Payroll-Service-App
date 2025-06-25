import React from 'react';
import { useInViewOnce } from '../ViewOnce';

import backendicon from '../assets/Images/icons/backendicon.jpeg';
import frontendicon from '../assets/Images/icons/frontendicon.jpeg';
import databaseicon from '../assets/Images/icons/databaseicon.jpeg';
import cloudicon from '../assets/Images/icons/cloudicon.jpeg';
import mobilityicon from '../assets/Images/icons/mobilityicon.jpeg';
import testingicon from '../assets/Images/icons/testingicon.jpeg';
import othersicon from '../assets/Images/icons/othersicon.jpeg';

const TechCard = () => {
  const [ref, hasBeenVisible] = useInViewOnce();

  const techStack = [
    {
      icon: backendicon,
      service: "Backend",
      tech: [".NET", "Java", "Node", "PHP", "Ruby on Rails"]
    },
    {
      icon: frontendicon,
      service: "Frontend",
      tech: ["Angular", "React", "Vue"]
    },
    {
      icon: databaseicon,
      service: "Database",
      tech: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Azure SQL", "Amazon RDS", "Oracle", "Cassandra", "Elasticsearch", "Dynamo"]
    },
    {
      icon: mobilityicon,
      service: "Mobility",
      tech: ["iOS", "Android", "React Native", "Flutter", "Ionic"]
    },
    {
      icon: testingicon,
      service: "Testing",
      tech: ["Selenium", "Katalon Studio", "ApacheJMeter", "TestRail", "Postman", "BrowserStack", "OWASP ZAP"]
    },
    {
      icon: cloudicon,
      service: "Cloud",
      tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      icon: othersicon,
      service: "Others",
      tech: ["SharePoint", "BizTalk", "PowerBI", "Apache Kafka"]
    },
  ];

  return (
    <section
      ref={ref}
      className={`w-full px-4 flex flex-col items-center gap-10 my-10 transition-all duration-700 ${
        hasBeenVisible ? 'text-appear' : 'opacity-0 -translate-x-12'
      }`}
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
        Technology Stack
      </h2>

      <div className="flex flex-col gap-12 max-w-6xl w-full p-5">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="w-full mb-6 flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Left: Service Label */}
            <div className="flex items-center gap-4 min-w-[200px]">
              <div className="flex items-center border-1 text-white px-4 py-2 gap-2 bg-black shadow-sm">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`${item.service} icon`}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <p className="text-lg font-medium">{item.service}</p>
              </div>
              {/* Connector line (hidden on small screens) */}
              <div className="hidden lg:block w-10 h-px border-double border-t-4 border-gray-400" />
            </div>

            {/* Right: Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {item.tech.map((techItem, idx) => (
                <div
                  key={`${index}-${idx}`}
                  className="text-sm sm:text-base border border-gray-300 bg-black text-white px-4 py-2 shadow-sm rounded"
                >
                  {techItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechCard;
