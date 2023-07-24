"use client";
import { Like, PostedBy } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import CircularProgressBar from "./CircularProgressBar";

export default function PersonListTile({ user }: { user: PostedBy }) {
  const { data: session } = useSession();
  const [loadingFollow, setLoadingFollow] = useState(false);
  let currentUser: boolean = false;
  let following: Like | undefined;

  if (session) {
    currentUser = user?._id === session.user.id;
    following = user?.followers?.find((item) => item._id === session.user.id);
  }

  const followHandler = useCallback(async () => {
    if (!session) {
      toast.error("Login Please");
      return;
    }

    setLoadingFollow(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/follow`,
      {
        userId: user._id,
        followingUser: {
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
      setLoadingFollow(false);

      toast.error("failed to like");
    }

    toast.success("success");
    setLoadingFollow(false);

    window.location.reload();
  }, [session, user?._id]);

  const unFollowHandler = useCallback(async () => {
    if (!session) {
      toast.error("Login Please");
      return;
    }

    setLoadingFollow(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/unfollow`,
      {
        userId: user._id,
        followingKey: following?._key,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status > 400) {
      setLoadingFollow(false);

      toast.error("failed to like");
    }

    toast.success("success");
    setLoadingFollow(false);

    window.location.reload();
  }, [following?._key, session, user?._id]);

  return (
    <div className="flex items-center">
      <div className="flex-1 flex gap-[0.5rem]">
        <div className="relative w-[4rem] h-[4rem] rounded-full bg-slate-200 overflow-hidden">
          {user?.image && <Image src={`${user?.image}`} alt={"profile"} fill />}
        </div>
        <div className="flex-1 flex flex-col gap-[0.3rem] justify-center">
          <h4 className="text-xs font-semibold">{user?.name}</h4>
          <p className="text-xs">{user?.followers?.length ?? "0"} followers</p>
        </div>
      </div>
      {loadingFollow ? (
        <div>
          <CircularProgressBar />
        </div>
      ) : (
        <div>
          {!currentUser && (
            <button
              className="text-xs font-semibold bg-black text-white px-[0.8rem] rounded-full py-[0.5rem]"
              onClick={following ? unFollowHandler : followHandler}
            >
              {following ? "unfollow" : "follow"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
