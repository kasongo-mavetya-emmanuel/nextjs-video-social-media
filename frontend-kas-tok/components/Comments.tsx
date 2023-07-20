"use client";
import { Comment, Post } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useCallback } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Comments = ({ post }: { post: Post }) => {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  const submitComment = useCallback(async () => {
    if (!session) {
      toast.error("Login Please");
      return;
    }
    if (!comment) {
      toast.error("comment cannot be empty");
      return;
    }
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/newcomment`,
      {
        postId: post._id,
        comment: {
          _type: "comment",
          postedBy: {
            _type: "postedBy",
            _ref: session.user.id,
          },
          comment: comment,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status > 400) {
      toast.error("failed to add comment");
    }

    toast.loading("wait for the refresh");
    setComment("");
    toast.success("success");

    window.location.reload();
  }, [comment, post._id, session]);

  return (
    <div>
      <h3 className="font-medium">Comments</h3>
      <div className="flex items-center py-5 border-b-2 border-slate-200 gap-[0.8rem]">
        <textarea
          value={comment}
          onChange={(val) => setComment(val.target.value)}
          placeholder="Your Comment"
          name="Your Comment"
          className="flex-1 py-[0.8rem] px-[0.8rem] focus:outline-none border border-slate-200"
        ></textarea>
        <div>
          <button
            onClick={submitComment}
            className="flex gap-[0.5rem] py-3 px-3 text-white bg-black rounded-full items-center text-xs"
          >
            Add Comment
          </button>
        </div>
      </div>
      <ul>
        {post.comments?.map((comment: Comment) => {
          return (
            <li key={comment._key} className="pt-9">
              <h3 className="font-semibold text-sm mb-3">
                {comment?.postedBy.name ?? ""}
              </h3>
              <p className="text-sm">{comment?.comment ?? ""}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
