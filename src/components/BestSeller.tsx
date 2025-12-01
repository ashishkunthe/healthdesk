import { FaStar } from "react-icons/fa";

const bestSellers = [
  {
    id: 1,
    name: "Dent Pure",
    image: "/products/DentPure.png",
    rating: 5,
  },
  {
    id: 2,
    name: "True Fem",
    image: "/products/TrueFem.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Vita Renew",
    image: "/products/VitaRenew.png",
    rating: 5,
  },
  {
    id: 4,
    name: "ProstaZen",
    image: "/products/ProstaZen.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Nerve Freedom",
    image: "/products/NerveFreedom.png",
    rating: 5,
  },
];

export function BestSeller() {
  return (
    <div className="py-10 px-10">
      <h2 className="text-5xl font-bold mb-4">Our Best Sellers</h2>

      <p className="text-gray-900 text-xl max-w-4xl">
        Formulated with science-backed all-natural ingredients, our unique
        supplements support holistic health, healing & wellness.
      </p>

      <div className="flex gap-10 mt-8 text-2xl font-bold">
        <div className="flex items-center gap-2">
          <span>Results-Driven</span>
        </div>

        <div className="flex items-center gap-2 ml-0 pl-0">
          <div className="h-12 w-0.5 bg-black"></div>
          <span>All-Natural</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-12 w-0.5 bg-black"></div>
          <span>Non-GMO</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-12 w-0.5 bg-black"></div>
          <span>Cruelty-Free</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-14">
        {bestSellers.map((item) => (
          <div key={item.id} className="text-center">
            <div className="bg-[#F1F4F8] rounded-xl p-6 mb-4 h-[260px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

            <div className="flex justify-center mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>

            <button className="border border-[#1E67D1] text-[#1E67D1] font-semibold px-10 py-2  hover:bg-[#1E67D1] hover:text-white transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
