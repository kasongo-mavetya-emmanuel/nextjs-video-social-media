"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Post } from "@/types";
import PostItem from "./PostItem";

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
  useEffect(() => {
    setLoading(true);
    setPosts([]);
    getPosts(`${topic}`).then((res: []) => {
      console.log("ooooo-oooooo");
      console.log(res);
      setPosts(res);
      setLoading(false);
    });
  }, [topic]);
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
