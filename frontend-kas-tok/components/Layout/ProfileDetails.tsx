import Link from "next/link";
import SideBar from "../SideBar";
import Home from "./Home";
import Content from "../Content";
import People from "../People";
import { headers } from "next/headers";
import { PostedBy } from "@/types";
import Image from "next/image";

const activeLink = "font-semibold pb-3 border-b-4 border-black";
const normalLink = "";

export default function ProfileDetails({
  contentType,
  user,
}: {
  contentType: string[];
  user: PostedBy;
}) {
  console.log("================");
  console.log(user);
  return (
    <Home>
      <SideBar />
      {user && (
        <div className="flex-1 flex flex-col h-full">
          <div className="border-b border-slate-100 flex flex-col gap-11">
            <div className="w-full pt-5 px-7 flex gap-5 items-center">
              <div className="relative w-[8rem] h-[8rem] bg-slate-100 rounded-full overflow-hidden">
                {user?.image && (
                  <Image src={`${user?.image}`} alt={"profile"} fill />
                )}
              </div>
              <div>
                <h1 className="font-bold text-lg">{user?.name}</h1>
                <p>{user?.followers?.length ?? "0"} followers</p>
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
                className={
                  contentType?.[0] === "liked" ? activeLink : normalLink
                }
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
      )}
      <People />
    </Home>
  );
}
