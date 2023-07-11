import { Content, Home, People, SideBar } from "@/components";
import Link from "next/link";

const activeLink = "font-semibold pb-3 border-b-4 border-black";
const normalLink = "";

export default function Profile({
  params,
}: {
  params: { contentType: string[] };
}) {
  const { contentType } = params;
  console.log(params);
  return (
    <Home>
      <SideBar />
      <div className="flex-1 flex flex-col h-full">
        <div className="border-b border-slate-100 flex flex-col gap-11">
          <div className="w-full pt-5 px-7 flex gap-5 items-center">
            <div className="w-[8rem] h-[8rem] bg-slate-100 rounded-full"></div>
            <div>
              <h1 className="font-bold text-lg">Your Name</h1>
              <p>32k followers</p>
            </div>
          </div>
          <ul className="flex gap-5 px-7">
            <li
              className={
                contentType?.[0] === undefined ? activeLink : normalLink
              }
            >
              <Link href={`/profile`}>Your Post</Link>
            </li>
            <li
              className={contentType?.[0] === "liked" ? activeLink : normalLink}
            >
              <Link href={`/profile/${"liked"}`}>Liked</Link>
            </li>
            <li
              className={
                contentType?.[0] === "commented" ? activeLink : normalLink
              }
            >
              <Link href={`/profile/${"commented"}`}>Commented</Link>
            </li>
          </ul>
        </div>
        <Content />
      </div>
      <People />
    </Home>
  );
}
