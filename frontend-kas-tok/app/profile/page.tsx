import { Content, Home, People, SideBar } from "@/components";

export default function Profile() {
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
            <li className="font-semibold pb-3 border-b-4 border-black">
              Your Post
            </li>
            <li>Liked</li>
            <li>Commented</li>
          </ul>
        </div>
        <Content />
      </div>
      <People />
    </Home>
  );
}
