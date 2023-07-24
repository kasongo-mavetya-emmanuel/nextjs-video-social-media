"use client";
import { useEffect, useState } from "react";
import PersonListTile from "./PersonListTile";
import { PostedBy } from "@/types";
import CircularProgressBar from "./CircularProgressBar";
import toast from "react-hot-toast";

async function getUsers() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getallusers`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    toast.error("failed to load");
  }
  const data = await res.json();

  return data;
}

export default function People() {
  const [people, setPeople] = useState<PostedBy[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPeople([]);
    getUsers().then((res: PostedBy[]) => {
      console.log("vvvvvbbbbbbvvvvvvvv");
      console.log(res);
      setPeople(res);
      setLoading(false);
    });
  }, []);
  return (
    <div
      className="basis-1/4 border-l-2 border-slate-200 pt-7 pl-3 xl:pl-5 pr-7 xl:pr-0 absolute md:relative
    bg-white md:bg-transparent h-full w-screen md:w-auto invisible md:visible"
    >
      <h2 className="font-bold">Suggested People</h2>
      {loading ? (
        <div className="flex justify-center pt-[10vh]">
          <CircularProgressBar />
        </div>
      ) : (
        <ul className="pt-7">
          {people?.map((item) => {
            return (
              <li key={item._id} className="w-full mb-3">
                <PersonListTile user={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
