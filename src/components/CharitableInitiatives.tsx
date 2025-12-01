const partnerLogos = [
  "/partners/PCF.png",
  "/partners/AT.png",
  "/partners/USP.png",
  "/partners/ADA.png",
  "/partners/AHA.png",
];

export function CharitableInitiatives() {
  return (
    <div
      className="bg-cover bg-center py-20 px-6 md:px-16"
      style={{ backgroundImage: "url('/partners/blue-bg.jpg')" }}
    >
      <div className="text-center text-white max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Our Charitable Initiatives
        </h2>
        <h2 className="text-xl md:text-4xl font-bold mb-4">
          Health Care Desk Gives Back
        </h2>

        <p className="text-sm md:text-lg opacity-90">
          At Health Care Desk, a portion of our profits are committed to
          supporting charities and global health research initiatives.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {partnerLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="partner logo"
            className="h-10 md:h-14 object-contain brightness-0 invert opacity-90"
          />
        ))}
      </div>
    </div>
  );
}
