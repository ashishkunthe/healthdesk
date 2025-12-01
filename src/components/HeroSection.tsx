export function HeroSection() {
  return (
    <div className="w-full bg-[#ffffff] py-10 px-10">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center bg-[#eeebeb]">
        <div className="flex-1 ml-10">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Health Desk Clinic: <br /> All Natural Supplements
          </h1>

          <p className="text-gray-900 text-xl font-semibold leading-relaxed mb-8 max-w-xl">
            Health Care Desk is the premier choice for those seeking wellness
            through wholesome, superfood-enriched formulas that actually work.
            Our all-natural, organic health supplements are designed to give
            your body what it needs to thrive and optimize your health each day!
          </p>

          <button className="bg-[#1E67D1] text-white font-semibold text-lg py-3 px-10 rounded-full hover:bg-transparent hover:text-[#1E67D1] border-2 border-[#1E67D1]">
            Shop Now
          </button>
        </div>

        <div className="flex-1 mt-8 mb-5 md:mt-0 flex justify-center">
          <img
            src="/doctor-img.png"
            alt="doctor"
            className="w-[420px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
