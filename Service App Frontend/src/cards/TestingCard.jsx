const TestingCard = ({ TestingHeading, TestingContent, TestingImage }) => {
  return (
    <div >
         <div className="rounded p-[2px] animated-card-border">
      <div className="bg-[#0a001f] rounded p-6 sm:p-8 md:p-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full">
        <img
          className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] rounded-full mb-4"
          src={TestingImage}
          alt={TestingHeading}
        />
        <h5 className="text-white text-xl sm:text-2xl font-semibold mb-4">{TestingHeading}</h5>

        <ul className="space-y-2 text-slate-300 text-sm sm:text-base md:text-lg font-medium">
          {TestingContent.map((item, index) => {
            const [boldPart, ...rest] = item.split(':');
            return (
              <li key={index} className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <div>
                  <span className="font-semibold">{boldPart.trim()}{rest.length > 0 && ':'}</span>
                  <span>{rest.join(':').trim() ? ` ${rest.join(':').trim()}` : ''}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
 
  );
};


export default TestingCard;
