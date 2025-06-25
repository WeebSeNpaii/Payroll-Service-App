import React from "react";
import TechCard from "../../cards/TechCard";
import Discussion from "../../Components/Discussion";
import { useInViewOnce } from "../../ViewOnce"; // Custom hook

const SoftwareDevelopment = () => {
  const [refHeader, headerVisible] = useInViewOnce();
  const [refServices, servicesVisible] = useInViewOnce();
  const [refTech, techVisible] = useInViewOnce();
  const [refDiscussion, discussionVisible] = useInViewOnce();

  const serviceData = [
    {
      heading: "Next-Gen Software for Modern Enterprises",
      description:
        "Our highly experienced team partners with you to design, develop, and deploy scalable, future-ready applications that seamlessly adapt across browsers, programs, and platforms. With a focus on flexibility, performance, and long-term value, we ensure your software is not only robust but also easily extensible as your business evolves.",
    },
    {
      heading: "Smart Application Evolution — Manage, Migrate, Thrive",
      description:
        "Our expert team specializes in modernizing legacy systems, enabling your business to keep pace with evolving demands while significantly improving operational efficiency. We help you seamlessly migrate outdated applications to modern, scalable, and flexible architectures.",
    },
    {
      heading: "Secure Your Applications with Confidence",
      description:
        "We help safeguard your applications, data, and infrastructure by implementing enterprise-grade security practices aligned with industry regulations and compliance standards. Our approach combines strategic security architecture design with thorough VAPT.",
    },
    {
      heading: "End-to-End Support for Peak Performance",
      description:
        "We provide a comprehensive suite of services to help you design and implement a powerful customer experience strategy. Our support team works proactively to optimize performance, enhance existing applications, and ensure seamless operations.",
    },
  ];

  return (
    <div className="w-full bg-[#0a001f]">
      {/* Header */}
      <section
        ref={refHeader}
        className={`w-full px-4 py-12 mt-[50px] flex justify-center transition-all duration-700 ${
          headerVisible ? "animate-fade-up" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl p-4 md:p-6 flex flex-col items-center gap-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
            Our Software Development Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-justify">
            At Clariquent Technologies, we specialize in building scalable,
            secure, and high-performing software solutions tailored to your
            unique business needs. From web and mobile apps to enterprise-level
            platforms, our expert team combines cutting-edge technology with
            agile methodologies to deliver robust, user-centric products. We
            don’t just build software — we craft solutions that make your
            business more profitable, competitive, and operationally efficient.
            Whether you're starting from scratch or modernizing existing
            systems, we turn your vision into impactful digital experiences that
            accelerate growth and drive success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 flex flex-col items-center gap-10 mb-10">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-6">
          Solutions Designed for Your Success
        </h2>
        <div
          ref={refServices}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full mb-10 transition-all duration-700 ${
            servicesVisible ? "animate-fade-left" : "opacity-0 -translate-x-12"
          }`}
        >
          {serviceData.map((item, index) => (
            <div className="">
              <div className="animated-card-border">
                <div key={index} className="shadow-md bg-[#0a001f] p-6 ">
                  <h3 className="mb-4 text-white text-xl font-medium">
                    {item.heading}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
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

export default SoftwareDevelopment;
