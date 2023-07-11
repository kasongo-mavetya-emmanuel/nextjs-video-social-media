import { Home } from "@/components";
import { topics } from "@/lib/constants/constants";
import { Topic } from "@/types";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidCloudUpload } from "react-icons/bi";
export default function NewPost() {
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
            <label>
              <div
                className="flex flex-col justify-center h-[60vh] items-center gap-9 p-7 
            rounded hover:bg-slate-100
            border-4 border-dashed cursor-pointer border-slate-400 hover:border-[#444]"
              >
                <div className="text-center flex flex-col items-center gap-7">
                  <BiSolidCloudUpload size={"4rem"} color="#b7b7b7" />
                  <p className="text-slate-400">
                    Recommendations: MP4, MKV, less than 10min
                  </p>
                  <p className="bg-black text-white w-full py-5 rounded-sm cursor-pointer ">
                    Select File
                  </p>
                </div>
              </div>
              <input type="file" className="w-0 -0" />
            </label>
          </div>
          <div className="flex flex-col gap-11 flex-1 w-full md:w-auto">
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
              <button className="border border-black bg-black text-white py-3 px-9 rounded-sm">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
