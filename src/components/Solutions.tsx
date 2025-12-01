import {
  FaFemale,
  FaTooth,
  FaBrain,
  FaShieldVirus,
  FaHeart,
  FaWeight,
  FaBurn,
  FaUserMd,
  FaStarOfLife,
} from "react-icons/fa";

const solutions = [
  {
    id: 1,
    title: "Weight Loss",
    desc: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
    icon: <FaWeight className="text-blue-500 text-5xl" />,
  },
  {
    id: 2,
    title: "Nerve Pain",
    desc: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.",
    icon: <FaBurn className="text-blue-500 text-5xl" />,
  },
  {
    id: 3,
    title: "Skin Care",
    desc: "Explore premium skincare products that nourish, protect, and enhance your natural glow.",
    icon: <FaStarOfLife className="text-blue-400 text-5xl" />,
  },
  {
    id: 4,
    title: "Men’s Health",
    desc: "Discover men’s health products designed to boost energy, strength, and overall well-being.",
    icon: <FaUserMd className="text-blue-500 text-5xl" />,
  },
  {
    id: 5,
    title: "Women's Health",
    desc: "Explore women’s health products that support hormonal balance, vitality, and overall wellness.",
    icon: <FaFemale className="text-blue-500 text-5xl" />,
  },
  {
    id: 6,
    title: "Dental",
    desc: "Shop dental care products that keep your smile bright, healthy, and confident.",
    icon: <FaTooth className="text-blue-500 text-5xl" />,
  },
  {
    id: 7,
    title: "Memory",
    desc: "Discover memory support products that help enhance focus, clarity, and cognitive performance.",
    icon: <FaBrain className="text-blue-500 text-5xl" />,
  },
  {
    id: 8,
    title: "Immunity",
    desc: "Boost your immune system with natural supplements designed to strengthen your defenses.",
    icon: <FaShieldVirus className="text-blue-500 text-5xl" />,
  },
  {
    id: 9,
    title: "Heart Health",
    desc: "Support cardiovascular wellness with supplements crafted for long-term heart health.",
    icon: <FaHeart className="text-blue-500 text-5xl" />,
  },
];

export function Solutions() {
  return (
    <div className="py-10 px-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-5">
        Nutrition Solutions
      </h2>
      <h2 className="text-5xl font-bold text-center mb-10">
        for Your Complete Well-Being
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-[slide_25s_linear_infinite]">
          {[...solutions, ...solutions].map((item) => (
            <div
              key={item.id + Math.random()}
              className="min-w-[260px] h-80 bg-[#E9F4EF] rounded-3xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex justify-start mb-4">
                <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-snug">
                  {item.desc}
                </p>
              </div>
              <button className="w-full py-2.5 rounded-full text-white font-semibold bg-linear-to-r from-[#5AB2FF] to-[#425CFF] mt-4">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
