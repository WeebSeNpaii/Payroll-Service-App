import React from 'react';
import { motion } from "framer-motion";

import useAnimateOnScroll from '../../AnimateScroll'; // adjust path if needed
import TechCard from "../../cards/TechCard";
import Discussion from '../../Components/Discussion';
import TechTeamCard from '../../cards/TechTeamCard';

import fullstackicon from '../../assets/Images/techImage/fullstackicon.jpg'
import systemicon from '../../assets/Images/techImage/systemicon.jpg'
import testengicon from '../../assets/Images/techImage/testengicon.jpg'
import devopsicon from '../../assets/Images/techImage/devopsicon.jpg'
import frontendicon from '../../assets/Images/techImage/frontendicon.jpg'
import mobileicon from '../../assets/Images/techImage/mobileicon.jpg'
import producticon from '../../assets/Images/techImage/producticon.jpg'
import uiicon from '../../assets/Images/techImage/uiicon.jpg'
import scrumicon from '../../assets/Images/techImage/scrumicon.jpg'

import longetivityicon from '../../assets/Images/techImage/longetivityicon.jpg'
import costicon from '../../assets/Images/techImage/costicon.jpg'
import progressicon from '../../assets/Images/techImage/progressicon.jpg'
import teamicon from '../../assets/Images/icons/teamicon.jpeg'



const HireTeam = () => {
  const techTeamData = [
    { title: "Full-Stack Developers", image: fullstackicon },
    { title: "System Architects", image: systemicon },
    { title: "Test Engineers", image: testengicon },
    { title: "DevOps Engineers and Administrators", image: devopsicon },
    { title: "Front-end and Back-end Programmers", image: frontendicon },
    { title: "Mobile Application Developers", image: mobileicon },
    { title: "Product/ Project Managers", image: producticon },
    { title: "UX/ UI Designers", image: uiicon },
    { title: "Scrum and Agile Masters", image: scrumicon},
  ];

  const teamBenefits = [
    { title: "Complete Control", image: teamicon },
    { title: "Cost-Efficiency", image: progressicon },
    { title: "Increased Productivity", image: costicon },
    { title: "Longevity", image: longetivityicon },
  ];

  const [teamRef, teamVisible] = useAnimateOnScroll();
  const [benefitRef, benefitVisible] = useAnimateOnScroll();

  return (
    <div className="w-full bg-[#0a001f]">
      {/* Header */}
      <motion.section
        className="w-full px-4 py-12 mt-[50px] flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl p-4 sm:p-6 md:p-10 flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold leading-tight">
            Our Hire Team Services
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            <span className="text-lg font-semibold text-sky-600 mb-2">
              Dedicated Teams Built Around Your Vision:
            </span>
            <br />
            At InlighnX Global, we offer a unique engagement model where we build dedicated teams that function as a true extension of your in-house staff. We understand the importance of team continuity and deep domain knowledge, which is why we ensure long-term team stability and alignment with your business goals. Our hand-picked professionals are selected not just for their technical expertise, but also for their ability to integrate seamlessly with your culture and vision.
            <br /><br />
            You have full control over the selection process — interview, assess, and choose the right talent that fits your requirements. With our streamlined and proven talent acquisition process, we minimize your hiring effort while ensuring you get only the most qualified and committed experts to accelerate your project success.
          </p>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            <span className="text-lg font-semibold text-sky-600">
              Dedicated Teams with On-Demand Expertise — Scalable. Flexible. Efficient:
            </span>
            <br />
             At InlighnX Global, we not only provide dedicated, long-term engineering teams fully aligned with your business goals, but also offer access to a flexible pool of on-demand experts—ready to step in when specialized skills are needed. Whether it's software architecture, UI/UX design, technical documentation, or performance optimization, our seasoned professionals can be deployed on a short-term basis, helping you control costs while maintaining high-quality delivery.
            <br /><br />
            This hybrid model gives you the best of both worlds—a consistent, reliable core team backed by expert resources who can accelerate development, resolve complex challenges, and support critical project milestones exactly when you need them.
          </p>
        </div>
      </motion.section>

      {/* Tech Team Section */}
     <section className="w-full px-4 flex flex-col items-center gap-10 mb-20">
  <h2
    ref={teamRef}
    className={`text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold transition-opacity duration-700 ease-out 
      ${teamVisible ? "fade-in-left" : "opacity-0 translate-x-[-100px]"}`}
  >
    Empowering You with a Team of Experts
  </h2>

  <div
    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full transition-opacity duration-700 delay-200 ease-out 
      ${teamVisible ? "fade-in-left" : "opacity-0 translate-x-[-100px]"}`}
  >
    {techTeamData.map((item, index) => (
      <TechTeamCard
        key={index}
        techteam={item.title}
        techImage={item.image}
      />
    ))}
  </div>
</section>

      {/* Team Benefits Section */}
    <section className="w-full px-4 flex flex-col items-center gap-10 mb-12">
  <h2
    ref={benefitRef}
    className={`text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold transition-opacity duration-700 ease-out 
      ${benefitVisible ? "fade-in-left" : "opacity-0 translate-x-[-100px]"}`}
  >
    Unlock the Value of Dedicated Teams
  </h2>

  <div
    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full transition-opacity duration-700 delay-200 ease-out 
      ${benefitVisible ? "fade-in-left" : "opacity-0 translate-x-[-100px]"}`}
  >
    {teamBenefits.map((item, index) => (
      <TechTeamCard
        key={index}
        techteam={item.title}
        techImage={item.image}
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

export default HireTeam;
 