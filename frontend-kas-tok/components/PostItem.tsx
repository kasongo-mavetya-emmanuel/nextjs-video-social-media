"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import PersonListTile from "./PersonListTile";
import { BiComment } from "react-icons/bi";
import Comments from "./Comments";
import { Like, Post } from "@/types";
import { useCallback, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import axios from "axios";
import CircularProgressBar from "./CircularProgressBar";

const PostItem = ({ post }: { post: Post }) => {
  const [toogleComment, setToogleComment] = useState(false);
  const [loadingLike, setLoadingLike] = useState(false);
  const { data: session } = useSession();
  let liked: Like | undefined;
  if (session) {
    liked = post.likes?.find((item) => item._id === session.user.id);
  }

  const toogleCommentHandler = useCallback(() => {
    setToogleComment((prev) => !prev);
  }, []);

  const likeHandler = useCallback(async () => {
    if (!session) {
      toast.error("Login Please");
      return;
    }

    setLoadingLike(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/like`,
      {
        postId: post._id,
        user: {
          _type: "reference",
          _ref: session.user.id,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status > 400) {
      setLoadingLike(false);

      toast.error("failed to like");
    }

    toast.success("success");
    setLoadingLike(false);

    window.location.reload();
  }, [post._id, session]);

  const disLikeHandler = useCallback(async () => {
    if (!session) {
      toast.error("Login Please");
      return;
    }

    setLoadingLike(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/dislike`,
      {
        postId: post._id,
        likeKey: liked?._key,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status > 400) {
      setLoadingLike(false);

      toast.error("failed to dislike");
    }

    toast.success("success");
    setLoadingLike(false);

    window.location.reload();
  }, [liked?._key, post._id, session]);

  return (
    <li className="mx-9 my-7">
      <PersonListTile user={post.postedBy} />
      <h2 className="my-[0.8rem]">{post.caption}</h2>
      <div className="w-full h-[50vh] bg-slate-200"></div>
      <div className="flex gap-5 py-3 justify-center">
        {loadingLike ? (
          <div className="flex justify-center">
            <CircularProgressBar />
          </div>
        ) : (
          <div className="flex gap-[0.2rem] items-center">
            {liked ? (
              <AiFillHeart size={"1.8rem"} onClick={disLikeHandler} />
            ) : (
              <AiOutlineHeart size={"1.8rem"} onClick={likeHandler} />
            )}
            <p className="text-sm">{post.likes?.length ?? "0"}</p>
          </div>
        )}
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
