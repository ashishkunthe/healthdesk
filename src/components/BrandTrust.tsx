const trustFeatures = [
  {
    id: 1,
    title: "All Natural",
    icon: "/leaf.png",
  },
  {
    id: 2,
    title: "Cruelty-Free",
    icon: "/rabbit.png",
  },
  {
    id: 3,
    title: "Money-back Guarantee",
    icon: "/batch.png",
  },
  {
    id: 4,
    title: "Giving back",
    icon: "/heart.png",
  },
  {
    id: 5,
    title: "Non-GMO",
    icon: "/dna.png",
  },
];
export function BrandTrust() {
  return (
    <div className="py-20 px-10">
      <div
        className="bg-cover bg-center rounded-xl py-20 px-6 md:px-14"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            A Brand That You Can Trust
          </h2>

          <p className="text-gray-700 mt-3 text-lg md:text-xl">
            Our results-driven supplements are made with premium & safe
            ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 place-items-center">
          {trustFeatures.map((item) => (
            <div key={item.id} className="text-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <p className="text-base md:text-lg font-semibold text-[#1D4ED8]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
