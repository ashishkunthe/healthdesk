import { BiShoppingBag } from "react-icons/bi";

export function Navbar() {
  return (
    <div className="relative h-20 px-10 flex items-center justify-between shadow-sm bg-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="h-16 w-auto" />
      </div>

      <div
        className="
        absolute left-1/2 -translate-x-1/2 
        hidden md:flex gap-10 
        text-[16px] font-medium
      "
      >
        <p>Home</p>
        <p>Shop</p>
        <p>About Us</p>
        <p>FAQ</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <div className="flex items-left text-2xl ">
          <BiShoppingBag />
        </div>
      </div>
    </div>
  );
}
