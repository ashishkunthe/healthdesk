import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    title: "TestoBites",
    image: "/bestsellers/testobites.png",
    rating: 5,
    desc: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and vitality as well. Highly recommended.",
    name: "Ryan R.",
  },
  {
    id: 2,
    title: "Vita Renew",
    image: "/bestsellers/derma.png",
    rating: 5,
    desc: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    name: "Jamie Fields",
  },
  {
    id: 3,
    title: "Nerve Freedom",
    image: "/bestsellers/NerveFreedom.png",
    rating: 5,
    desc: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    name: "Anonymous",
  },
];

export function CustomerTestimonial() {
  return (
    <div className="py-20 px-6 md:px-10 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-14">
        Verified Customer Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#E9F4F8] p-8 rounded-3xl shadow-sm overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 absolute top-4 left-4 object-contain"
            />

            <div
              className="absolute left-0 right-0 top-[140px] h-[110px] bg-gradient-to-r from-[#E9F4F8] via-[#dfeef5] to-[#cbe4f7] opacity-70"
              style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)" }}
            ></div>

            <div className="pt-28 text-left relative z-10">
              <h3 className="text-xl font-bold">{item.title}</h3>

              <div className="flex items-center gap-1 my-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-[17px] mt-2">
                {item.desc}
              </p>

              <p className="font-semibold text-gray-900 mt-4 text-lg">
                - {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex justify-center">
        <img src="/bestsellers/healthdesk.png" alt="logo" className="h-50" />
      </div>

      <button className="border border-[#1E67D1] text-[#1E67D1] font-semibold px-10 py-2 mb-6 hover:bg-[#1E67D1] hover:text-white transition">
        Follow Us
      </button>

      <div className="flex justify-center gap-6 text-[#1E67D1] text-2xl">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaTelegram />
      </div>
    </div>
  );
}
