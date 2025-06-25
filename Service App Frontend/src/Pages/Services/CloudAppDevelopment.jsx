import React from "react";
import TechCard from "../../cards/TechCard";
import Discussion from "../../Components/Discussion";
import { useInViewOnce } from "../../ViewOnce";

const CloudAppDevelopment = () => {
  const [refHeader, headerVisible] = useInViewOnce();
  const [refServices, servicesVisible] = useInViewOnce();
  const [refTech, techVisible] = useInViewOnce();
  const [refDiscussion, discussionVisible] = useInViewOnce();

  const serviceData = [
    {
      heading: "Prepare Your Business for a Seamless Cloud Transition",
      description:
        "We help you analyze and evaluate your existing infrastructure and applications to define a clear, strategic roadmap for seamless cloud migration. Our approach ensures access to a flexible, secure, and optimized pool of IT resources, available anytime over the network. With dynamic, on-demand scalability and intelligent provisioning, we empower your business to reduce costs, improve agility, and scale effortlessly—laying the foundation for a truly resilient and future-ready cloud environment.",
    },
    {
      heading: "End-to-End Solution Design, Architecture & Deployment",
      description:
        "We empower your business by developing, deploying, and hosting robust applications across leading cloud platforms such as AWS, Microsoft Azure, Google Cloud, and Force.com. Leveraging our deep expertise in cloud technologies and well-defined, agile methodologies, we deliver scalable, secure, and high-performance solutions tailored to your needs. Whether you're building new cloud-native apps or migrating existing systems, Clariquent Technologies ensures a seamless cloud experience that accelerates innovation and maximizes ROI.",
    },
    {
      heading: "Expert Guidance for Your Cloud Adoption Journey",
      description:
        "We help you define a tailored cloud strategy aligned with your unique business goals, leveraging the right mix of SaaS, PaaS, or IaaS architectures. Our cloud experts design strategies that ensure maximum scalability, enterprise-grade security, and high availability, empowering your organization to innovate faster and operate more efficiently. With a focus on long-term value, we deliver cloud solutions that are not only future-ready but also built to drive growth, resilience, and competitive advantage.",
    },
  ];

  return (
    <div className="w-full bg-[#0a001f]">
      {/* Header Section */}
      <section
        ref={refHeader}
        className={`w-full px-4 py-12 mt-[50px] flex justify-center transition-all duration-700 ${
          headerVisible ? "animate-fade-up" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="w-full max-w-6xl p-4 sm:p-6 md:p-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight">
            Our Cloud App Development Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            At Clariquent Technologies, we deliver cutting-edge Cloud Application Development services to clients worldwide, helping businesses scale faster, reduce infrastructure costs, and boost agility. Our expert team builds secure, high-performance cloud-native apps tailored to your goals—leveraging platforms like AWS, Azure, and Google Cloud. From development to deployment and optimization, we ensure your cloud applications are resilient, scalable, and future-ready, empowering you to innovate without limits.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 flex flex-col items-center gap-10 mb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-6">
          Solutions Designed for Your Success
        </h2>

        <div
          ref={refServices}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full transition-all duration-700 ${
            servicesVisible ? "animate-fade-left" : "opacity-0 -translate-x-12"
          }`}
        >
          {serviceData.map((item, index) => (
            <div key={index} className="">
              <div className="animated-card-border">
                 <div className="bg-[#0a001f] p-6 shadow-md">
                <h3 className="mb-3 text-white text-lg sm:text-xl font-medium">
                  {item.heading}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <div
        ref={refTech}
        className={`transition-all duration-700 ${
          techVisible ? "animate-fade-up" : "opacity-0 translate-y-12"
        }`}
      >
        <TechCard />
      </div>

      {/* Discussion Section */}
      <div
        ref={refDiscussion}
        className={`transition-all duration-700 ${
          discussionVisible ? "animate-fade-up" : "opacity-0 translate-y-12"
        }`}
      >
        <Discussion />
      </div>
    </div>
  );
};

export default CloudAppDevelopment;
