import React from 'react';
import { Link } from 'react-router-dom';
import { useInViewOnce } from '../ViewOnce';

const Discussion = () => {
  const [ref, hasBeenVisible] = useInViewOnce();

  return (
    <div
      ref={ref}
      className={` w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-10 bg-[#0a0a0a] md:justify-around transition-all duration-700 ${
        hasBeenVisible ? 'text-appear' : 'opacity-0 -translate-x-12'
      }`}
    >
      <p className="text-white text-xl sm:text-2xl font-semibold text-center sm:text-left">
        Let's Discuss Your Needs
      </p>
      <Link to="/ContactUs">
       <div className="animated-gradient-border absolute">
              <span className="block px-6 md:px-8 py-2 text-sm md:text-base bg-[#0a001f] text-white font-semibold rounded-full text-center">
                Contact Us
              </span>
            </div>
      </Link>
    </div>
  );
};

export default Discussion;

