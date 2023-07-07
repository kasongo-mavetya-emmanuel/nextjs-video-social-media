import PersonListTile from "./PersonListTile";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiComment, BiSolidComment } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

export default function Content() {
  return (
    <div className="flex-1 overflow-scroll">
      <ul>
        <li className="mx-9 my-7">
          <PersonListTile />
          <h2 className="my-[0.8rem]">Some Good News</h2>
          <div className="w-full h-[50vh] bg-slate-200"></div>
          <div className="flex gap-5 py-3 justify-center">
            <div className="flex gap-[0.2rem] items-center">
              <AiFillHeart size={"1.8rem"} />
              <p className="text-sm">24k</p>
            </div>
            <div className="flex gap-[0.2rem] items-center">
              <BiComment size={"1.8rem"} />
              <p className="text-sm">10k</p>
            </div>
          </div>
          <h3 className="font-medium">Comments</h3>
          <div className="flex items-center py-5 border-b-2 border-slate-200 gap-[0.8rem]">
            <textarea
              placeholder="Your Comment"
              name="Your Comment"
              className="flex-1 py-[0.8rem] px-[0.8rem] focus:outline-none border border-slate-200"
            ></textarea>
            <div>
              <button className="flex gap-[0.5rem] py-3 px-3 text-white bg-black rounded-full items-center text-xs">
                Add Comment
              </button>
            </div>
          </div>
          <ul>
            <li className="pt-9">
              <h3 className="font-semibold text-sm mb-3">User Name</h3>
              <p className="text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                similique harum recusandae illo modi facilis ipsa assumenda
                necessitatibus obcaecati molestias voluptatum.{" "}
              </p>
            </li>
            <li className="pt-9">
              <h3 className="font-semibold text-sm mb-3">User Name</h3>
              <p className="text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                similique harum recusandae illo modi facilis ipsa assumenda
                necessitatibus obcaecati molestias voluptatum.{" "}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
