"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setIsDrawer } from "../store/windows";
import { AppDispatch } from "../store";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";
import { useRouter } from "next/navigation";
export default function NavBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const toogleDrawer = useCallback(() => {
    dispatch(setIsDrawer());
  }, [dispatch]);

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchQuery(e.target.value);
      router.push(`/?search=${e.target.value}`);
    },
    [router]
  );

  return (
    <div className="border-b border-gray w-full py-5 px-7 xl:px-0">
      <div className="max-w-screen-xl flex justify-between mx-auto items-center">
        <div className="md:hidden" onClick={toogleDrawer}>
          <AiOutlineMenu size={"2rem"} />
        </div>
        <h2 className="font-bold text-2xl">KasTok</h2>
        <div className="flex items-center gap-5 border border-gray rounded-full  bg-slate-200 px-5 hidden md:flex">
          <input
            name="Search"
            aria-label="Search"
            placeholder="Search"
            type="Search"
            value={searchQuery}
            onChange={searchHandler}
            required
            className="px-3 py-3 bg-none bg-transparent focus:outline-none"
          />
          <BsSearch />
        </div>
        <WebMenu />
      </div>

      <div className="flex items-center border border-gray rounded-full  bg-slate-200 px-5 md:hidden mx-3 mt-3">
        <input
          name="Search"
          aria-label="Search"
          placeholder="Search"
          type="Search"
          value={searchQuery}
          onChange={searchHandler}
          required
          className="px-3 py-3 bg-none bg-transparent focus:outline-none flex-1"
        />
        <BsSearch />
      </div>
    </div>
  );
}
