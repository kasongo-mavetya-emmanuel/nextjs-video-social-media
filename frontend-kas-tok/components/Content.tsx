"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";
import { Post } from "@/types";
import PostItem from "./PostItem";
import { useSession } from "next-auth/react";
import CircularProgressBar from "./CircularProgressBar";
import toast from "react-hot-toast";

const getPosts = async (topic: string) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getposts?topic=${topic}`
  );

  if (res.status >= 400) {
    toast.error("failed to like");
  }
  return res.data;
};

const getSearchedPosts = async (search: string) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/searchposts/?search=${search}`
  );
  console.log("ooooo", res);

  if (res.status >= 400) {
    toast.error("failed to like");
  }
  return res.data;
};

export default function Content() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");
  const search = searchParams.get("search");
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    setLoading(true);
    setPosts([]);
    if (search) {
      getSearchedPosts(`${search}`).then((res: Post[]) => {
        console.log("bbbbbbbcccc", res);
        setPosts(res);
        setLoading(false);
      });
    } else {
      getPosts(`${topic}`).then((res: Post[]) => {
        if (session) {
          if (pathname === "/profile") {
            const list = res.filter(
              (item) => item.postedBy._id === session.user.id
            );
            setPosts(list);
          } else if (pathname === "/profile/liked") {
            const list = res.filter((item) => {
              const i = item.likes?.find((l) => l._id === session.user.id);
              if (i) {
                return true;
              } else {
                return false;
              }
            });
            setPosts(list);
          } else if (pathname === "/profile/commented") {
            const list = res.filter((item) => {
              const i = item.comments?.find(
                (l) => l.postedBy._id === session.user.id
              );
              if (i) {
                return true;
              } else {
                return false;
              }
            });
            setPosts(list);
          } else {
            setPosts(res);
          }
        } else {
          setPosts(res);
        }
        setLoading(false);
      });
    }

    console.log("ccczzzzz", posts);
    console.log("rrrrrr", typeof posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, pathname, search]);

  return (
    <div className="flex-1 overflow-scroll">
      {loading ? (
        <div className="flex justify-center pt-[10vh]">
          <CircularProgressBar />
        </div>
      ) : (
        <ul>
          {posts &&
            posts?.map((post) => {
              return <PostItem key={post._id} post={post} />;
            })}
        </ul>
      )}
      <div className="h-[20vh] w-full"></div>
    </div>
  );
}
