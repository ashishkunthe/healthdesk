export function Footer() {
  return (
    <footer className="text-gray-800">
      <div className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Have a Question?</h3>
            <p className="text-lg mb-6">
              Check out our FAQs where we answer the most commonly asked
              questions
            </p>
            <button className="border border-[#1E67D1] text-[#1E67D1] px-10 py-3 text-lg  hover:bg-[#1E67D1] hover:text-white transition">
              Read FAQs
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-lg mb-4">Enjoy free shipping for all orders.</p>
            <p className="font-bold text-2xl">1-800-822-7777</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">We're Social</h3>
            <p className="text-lg">Like us, love us, follow us!</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1E67D1] text-white">
        <div className="max-w-7xl mx-auto py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-1">Let's Grow Together</h3>
            <p className="text-sm md:text-base opacity-90">
              We&apos;ll keep it simple. Only the news and updates you need.
            </p>
          </div>

          <div className="flex w-full md:w-auto max-w-xl">
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full px-4 py-3 border border-white border-r-0 bg-transparent text-white placeholder-white/80 outline-none"
            />
            <button className="px-8 py-3 border border-white bg-white text-[#1E67D1] font-semibold  hover:bg-gray-100">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-12 text-sm">
          <div className="md:col-span-2">
            <img
              src="/bestsellers/healthdesk.png"
              alt="Health Care Desk"
              className="h-20 mb-6"
            />
            <p>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
            <p>Phone: (512) 555-2376</p>
            <p>Email: Eroforce@outlook.com</p>
          </div>

          <div className="md:col-span-3 md:border-l md:pl-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-[#1E67D1]">
                Our Products
              </h4>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Uro flow</p>
            </div>
            <div>
              <h4 className="opacity-0 mb-3">.</h4>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Memof</p>
            </div>
            <div>
              <h4 className="opacity-0 mb-3">.</h4>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>Derma care</p>
            </div>
            <div>
              <h4 className="opacity-0 mb-3">.</h4>
              <p>Vita Renew</p>
              <p>Testobites</p>
              <p>Audizen</p>
              <p>Nerve Flow</p>
              <p>True Fem</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 px-6 mb-4 max-w-4xl mx-auto">
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease. Individual results may vary.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src="/bank.png"
            alt="Payment Methods"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        <div className="border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                Terms And Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
