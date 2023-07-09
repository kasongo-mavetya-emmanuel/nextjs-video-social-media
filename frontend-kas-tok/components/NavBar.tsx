import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
export default function NavBar() {
  return (
    <div className="border-b border-gray w-full py-5 px-7 xl:px-0">
      <div className="max-w-screen-xl flex justify-between mx-auto items-center">
        <div className="md:hidden">
          <AiOutlineMenu size={"2rem"} />
        </div>
        <h2 className="font-bold text-2xl">KasTok</h2>
        <div className="flex items-center gap-5 border border-gray rounded-full  bg-slate-200 px-5 hidden md:flex">
          <input
            name="Search"
            aria-label="Search"
            placeholder="Search"
            type="Search"
            required
            className="px-3 py-3 bg-none bg-transparent focus:outline-none"
          />
          <BsSearch />
        </div>
        <div className="hidden md:block">
          <button className="flex items-center gap-2 font-semibold border border-gray px-5 py-3">
            <FcGoogle size={"2rem"} />
            Google SignIn
          </button>
        </div>
        <div className="md:hidden relative">
          <BsThreeDotsVertical />
          <ul className="bg-white absolute right-0 top-5 px-5 py-3 shadow z-50 flex flex-col gap-3">
            <li className="text-sm">Login</li>
            <li className="text-sm">Add&nbsp;Post</li>
            <li className="text-sm">Suggested&nbsp;People</li>
            <li className="text-sm">Profile</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center border border-gray rounded-full  bg-slate-200 px-5 md:hidden mx-3 mt-3">
        <input
          name="Search"
          aria-label="Search"
          placeholder="Search"
          type="Search"
          required
          className="px-3 py-3 bg-none bg-transparent focus:outline-none flex-1"
        />
        <BsSearch />
      </div>
    </div>
  );
}
