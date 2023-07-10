"use client";
import { useSelector } from "react-redux";
import { WindowsStateIProp } from "@/types";

export default function SideBar() {
  const isDrawer = useSelector((state: WindowsStateIProp) => state.isDrawer);

  return (
    <div
      className={`border-r-2 border-slate-200 basis-1/4 pl-7 xl:pl-0 absolute ${
        !isDrawer ? "invisible" : "visible"
      } md:visible md:relative bg-white md:bg-transparent h-full w-[70vw] md:w-auto`}
    >
      <h3 className="mt-7 font-bold">Home</h3>
      <div className="pt-7">
        <div className="w-[90%] h-[1px] bg-slate-200 mb-5"></div>
        <h3 className="text-slate-400">TOPICS</h3>
        <ul>
          <li className="py-3 border-r-4 border-black font-semibold">
            Development
          </li>
          <li className="py-3">Sport</li>
          <li className="py-3">fashion</li>
          <li className="py-3">comedi</li>
          <li className="py-3">politics</li>
        </ul>
      </div>

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
