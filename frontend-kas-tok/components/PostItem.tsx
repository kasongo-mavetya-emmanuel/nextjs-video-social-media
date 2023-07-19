"use client";
import { AiFillHeart } from "react-icons/ai";
import PersonListTile from "./PersonListTile";
import { BiComment } from "react-icons/bi";
import Comments from "./Comments";
import { Post } from "@/types";
import { useCallback, useState } from "react";

const PostItem = ({ post }: { post: Post }) => {
  const [toogleComment, setToogleComment] = useState(false);

  const toogleCommentHandler = useCallback(() => {
    setToogleComment((prev) => !prev);
  }, []);

  return (
    <li className="mx-9 my-7">
      <PersonListTile user={post.postedBy} />
      <h2 className="my-[0.8rem]">{post.caption}</h2>
      <div className="w-full h-[50vh] bg-slate-200"></div>
      <div className="flex gap-5 py-3 justify-center">
        <div className="flex gap-[0.2rem] items-center">
          <AiFillHeart size={"1.8rem"} />
          <p className="text-sm">{post.likes?.length ?? "0"}</p>
        </div>
        <div className="flex gap-[0.2rem] items-center">
          <BiComment
            size={"1.8rem"}
            onClick={toogleCommentHandler}
            style={{ cursor: "pointer" }}
          />
          <p className="text-sm">{post.comments?.length ?? "0"}</p>
        </div>
      </div>
      {toogleComment && <Comments post={post} />}
    </li>
  );
};

export default PostItem;
