"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Discover from "./Discover";

const activeLink = "py-3 border-r-4 border-black font-semibold";
const normalLink = "py-3";
export default function SideBar() {
  const isDrawer = useSelector((state: RootState) => {
    return state.windows.isDrawer;
  });
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic");
  return (
    <div
      className={`border-r-2 border-slate-200 basis-1/4  z-50 pl-7 xl:pl-0 absolute ${
        !isDrawer ? "invisible" : "visible"
      } md:visible md:relative bg-white md:bg-transparent h-full w-[70vw] md:w-auto`}
    >
      <Link href={"/"}>
        <h3
          className={`mt-7 hover:bg-slate-100 ${
            pathname === "/" && !topic ? activeLink : normalLink
          }`}
        >
          Home
        </h3>
      </Link>

      <Discover />

      <div className="pt-7">
        <div className="w-[90%] h-[1px] bg-slate-200 mb-5"></div>
        <h3 className="text-slate-400">RESOURCES</h3>
        <ul>
          <li className="py-3">About Us</li>
          <li className="py-3">Help</li>
        </ul>
      </div>
    </div>
  );
}
