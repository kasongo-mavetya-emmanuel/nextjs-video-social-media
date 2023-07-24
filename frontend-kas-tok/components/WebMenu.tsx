import { useState, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import CircularProgressBar from "./CircularProgressBar";

export default function WebMenu() {
  const [toogle, setToogle] = useState(false);
  const { data: session, status } = useSession();
  const toogleHandler = useCallback(() => {
    setToogle((prev) => !prev);
  }, []);
  const loginHandler = useCallback(async () => {
    signIn("google");
  }, []);
  const logoutHandler = useCallback(() => {
    signOut();
  }, []);

  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex gap-3 md:gap-7 items-center">
          <Link href={"/newpost"}>
            <button className="flex items-center gap-2 font-semibold border border-gray px-5 py-3">
              <AiOutlinePlus />
              <span className="hidden md:inline-block"> Upload</span>
            </button>
          </Link>
          <div className="relative">
            <div
              className="w-[4rem] h-[4rem] bg-slate-200 rounded-full relative overflow-hidden"
              onClick={toogleHandler}
            >
              <Image src={`${session.user?.image}`} alt={"profile"} fill />
            </div>
            {toogle && (
              <ul className="absolute py-5 px-5 shadow z-50 bg-white flex flex-col gap-3">
                <li className="cursor-pointer" onClick={logoutHandler}>
                  Logout
                </li>
                <li className="cursor-pointer">
                  <Link href={"/profile"}>Profile</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : status === "loading" ? (
        <div>
          <CircularProgressBar />
        </div>
      ) : (
        <button
          className="flex items-center gap-2 font-semibold border border-gray px-5 py-3"
          onClick={loginHandler}
        >
          <FcGoogle size={"2rem"} />
          <span className="hidden md:inline-block"> Google SignIn</span>
        </button>
      )}
    </div>
  );
}
