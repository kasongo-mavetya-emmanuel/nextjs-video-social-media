import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
export default function NavBar() {
  return (
    <div className="border-b border-gray w-full py-5">
      <div className="max-w-screen-xl flex justify-between mx-auto items-center">
        <h2 className="font-bold text-2xl">KasTok</h2>
        <div className="flex items-center gap-5 border border-gray rounded-full  bg-slate-200 px-5">
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
        <div>
          <button className="flex items-center gap-2 font-semibold border border-gray px-5 py-3">
            <FcGoogle size={"2rem"} />
            Google SignIn
          </button>
        </div>
      </div>
    </div>
  );
}
