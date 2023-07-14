import { Home, VideoPicker } from "@/components";
import { topics } from "@/lib/constants/constants";
import { Topic } from "@/types";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidCloudUpload } from "react-icons/bi";
import { headers } from "next/headers";
import { useState } from "react";

async function getUserData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getuser`, {
    method: "GET",
    headers: headers(),
  });
  console.log("------------------------------");

  if (!res.ok) {
    throw new Error("failed to load data");
  }
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function NewPost() {
  const data = await getUserData();
  console.log(data);
  const [imageDoc, setImageDoc] = useState(null);
  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("");

  const postHandler = (e: React.ChangeEvent<FormData>) => {};

  return (
    <Home>
      <div className="w-full h-full overflow-scroll md:overflow-hidden">
        <div className="py-7 pl-11 xl:pl-0">
          <FaArrowLeft size={"1.6rem"} />
        </div>
        <div
          className="flex w-full gap-11 md:gap-24 flex-col md:flex-row 
       px-11 xl:px-0 items-center"
        >
          <div className="basis-1/3">
            <VideoPicker imageDoc={imageDoc} setImageDoc={setImageDoc} />
          </div>

          <NewPostForm />
        </div>
      </div>
    </Home>
  );
}

const NewPostForm = () => {
  return (
    <form onSubmit={} className="flex flex-col gap-11 flex-1 w-full md:w-auto">
      <label className="text-sm font-semibold">
        Caption :
        <input
          required
          name="caption"
          placeholder="Caption"
          className="block outline-none border border-black mt-2 rounded-sm px-3 py-3 w-full md:w-[80%]  font-normal"
        />
      </label>
      <label className="text-sm font-semibold">
        Topic :
        <select
          name="topics"
          placeholder="Select a Topic"
          className="font-normal px-3 py-3 rounded-sm block border border-black w-[50%] outline-none mt-2"
        >
          {topics.map((topic: Topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.name}
            </option>
          ))}
        </select>
      </label>

      <div className="flex gap-5">
        <button className="border border-black py-3 px-5 rounded-sm">
          Discard
        </button>
        <button
          type="submit"
          className="border border-black bg-black text-white py-3 px-9 rounded-sm"
        >
          Post
        </button>
      </div>
    </form>
  );
};
