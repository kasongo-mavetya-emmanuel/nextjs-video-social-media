import { PostedBy } from "@/types";
import Image from "next/image";

export default function PersonListTile({ user }: { user: PostedBy }) {
  console.log(user);
  return (
    <div className="flex items-center">
      <div className="flex-1 flex gap-[0.5rem]">
        <div className="relative w-[4rem] h-[4rem] rounded-full bg-slate-200 overflow-hidden">
          {user?.image && <Image src={`${user?.image}`} alt={"profile"} fill />}
        </div>
        <div className="flex flex-col gap-[0.3rem] justify-center">
          <h4 className="text-xs font-semibold">{user?.name}</h4>
          <p className="text-xs">{user?.followers?.length ?? "0"} followers</p>
        </div>
      </div>
      <div>
        <button className="text-xs font-semibold bg-black text-white px-[0.8rem] rounded-full py-[0.5rem]">
          follow
        </button>
      </div>
    </div>
  );
}
