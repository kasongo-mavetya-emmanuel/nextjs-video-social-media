import { useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";

export default function WebMenu() {
  const [toogle, setToogle] = useState(false);
  const { status } = useSession();
  const toogleHandler = useCallback(() => {
    setToogle((prev) => !prev);
  }, []);
  const loginHandler = useCallback(() => {
    signIn("google");
  }, []);
  return (
    <div className="hidden md:block">
      {status === "authenticated" && (
        <div className="flex gap-7 items-center">
          <button className="flex items-center gap-2 font-semibold border border-gray px-5 py-3">
            <AiOutlinePlus />
            Upload
          </button>
          <div className="relative">
            <div
              className="w-[4rem] h-[4rem] bg-slate-200 rounded-full"
              onClick={toogleHandler}
            ></div>
            {toogle && (
              <ul className="absolute py-5 px-5 shadow z-50 bg-white flex flex-col gap-3">
                <li>Logout</li>
                <li>Profile</li>
              </ul>
            )}
          </div>
        </div>
      )}
      <button
        className="flex items-center gap-2 font-semibold border border-gray px-5 py-3"
        onClick={loginHandler}
      >
        <FcGoogle size={"2rem"} />
        Google SignIn
      </button>
    </div>
  );
}
