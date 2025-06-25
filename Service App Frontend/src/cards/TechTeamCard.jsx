import React from "react";


const TechTeamCard = ({techteam, techImage}) => {
    
  return (
<div className="animated-card-border cards-appear">
   <div className=" p-7 h-[250px] flex flex-col justify-center items-center bg-[#0a001f]">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover "
              src={techImage}
              alt={techteam}
            />
            <p className="p-5 text-white text-lg font-semibold text-center bg-[#0a001f]">{techteam}</p>
          </div>
</div>
    


   
     
   
  );
};

export default TechTeamCard;
