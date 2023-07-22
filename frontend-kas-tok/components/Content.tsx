"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios";
import { Post } from "@/types";
import PostItem from "./PostItem";
import { useSession } from "next-auth/react";

const getPosts = async (topic: string) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getposts?topic=${topic}`
  );

  if (res.status >= 400) {
    throw new Error("failed to load data");
  }
  return res.data;
};

export default function Content() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    setLoading(true);
    setPosts([]);
    getPosts(`${topic}`).then((res: Post[]) => {
      console.log("ooooo-oooooo");
      console.log(res);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, pathname]);

  return (
    <div className="flex-1 overflow-scroll">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => {
            return <PostItem key={post._id} post={post} />;
          })}
        </ul>
      )}
    </div>
  );
}
