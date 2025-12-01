const healthBlocks = [
  {
    id: 1,
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    desc: `We harness the goodness of nature to create supplements enriched 
      with premium, research-backed superfood extracts. Each formula is carefully 
      crafted to promote overall vitality and deliver proven health benefits. 
      At Health Desk Care, we uphold the highest standards of quality, safety, 
      and regulatory compliance, ensuring every product you choose is both 
      effective and trustworthy.`,
    image: "/fruits.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Research-Backed Formulations",
    subtitle: "Formulated with Clinically Tested Ingredients",
    desc: `We combine the expertise of our physicians with the latest health 
      data and medical research, ensuring every supplement is thoughtfully 
      formulated for maximum benefit.`,
    image: "/lab.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Eco-Conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    desc: `Our supplements are crafted in certified facilities that meet and 
      exceed industry standards — ensuring exceptional quality while minimizing 
      environmental impact. Through eco-friendly processes and a commitment to 
      reducing our carbon footprint, we create wellness solutions that are as 
      good for the planet as they are for you.`,
    image: "/eco.jpg",
    reverse: false,
  },
];

export function HealthCareDesk() {
  return (
    <div className="py-20 px-6 md:px-16 bg-white">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Health Care Desk <br /> The Future Of Smart Health
        </h2>

        <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
          At Health Care Desk, we are committed to producing supplements that
          harness the power of all-natural superfoods. Our products help support
          the body's natural processes, improving our customers' quality of
          life.
        </p>
      </div>

      <div className="space-y-28">
        {healthBlocks.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto`}
          >
            <div
              className={`flex justify-center ${
                item.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-md  object-cover"
              />
            </div>

            <div className={`${item.reverse ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 font-medium text-lg mb-4">
                {item.subtitle}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {item.desc}
              </p>

              <button className="border border-[#1E67D1] text-[#1E67D1] font-semibold px-10 py-3  text-lg hover:bg-[#1E67D1] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
