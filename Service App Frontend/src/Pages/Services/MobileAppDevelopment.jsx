import React from 'react';
import iosicon from '../../assets/Images/techImage/iosicon.jpg'
import androidicon from '../../assets/Images/techImage/androidicon.jpg'
import crossplaticon from '../../assets/Images/techImage/crossplaticon.jpg'
import TechTeamCard from '../../cards/TechTeamCard';
import TechCard from '../../cards/TechCard';
import Discussion from '../../Components/Discussion';
import { motion } from "framer-motion";




const MobileAppDevelopment = () => {
  const Solutions = [
    { AppSolutions: "iOS App Development", techImage: iosicon },
    { AppSolutions: "Android App Development", techImage:androidicon },
    { AppSolutions: "Cross-Platform Development", techImage: crossplaticon },
  ];

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
            Seamless Native and Cross Platforms App Development
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            At Clariquent Technologies, we craft intuitive and user-friendly mobile experiences for both iOS and Android platforms. Backed by our Center of Excellence and a highly skilled team of architects, developers, and QA experts, we deliver secure, scalable, and high-performing custom mobile applications using the latest technologies and modern programming languages — tailored to any mobile platform or operating system.
            <br /><br />
            Our mobile app development services are driven by a design-first approach. Our dedicated UI/UX design team works closely with you to create visually stunning and highly usable interfaces. These designs are then brought to life with pixel-perfect precision by our expert development team.
            <br /><br />
            Using an agile development methodology, we ensure continuous improvement throughout the project lifecycle. By gathering feedback at every stage, we refine the product iteratively — delivering a mobile app that’s not just functional, but exceptional in performance and user experience.
          </p>
        </div>
     
            </motion.section>
     

      {/* Services Section */}
      <section className="w-full px-4 flex flex-col items-center gap-10 mb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Solutions Designed for your success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {Solutions.map((item, index) => (
            <TechTeamCard
              key={index}
              techteam={item.AppSolutions}
              techImage={item.techImage}
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

export default MobileAppDevelopment;
