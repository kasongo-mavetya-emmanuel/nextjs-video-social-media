"use client";
import { FaArrowLeft } from "react-icons/fa";
import VideoPicker from "../VideoPicker";
import NewPostForm from "../NewPostForm";
import { useRef, useState } from "react";
import { Video } from "cloudinary-react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function NewPost({ user }: any) {
  const [video, setVideo] = useState("");
  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("development");
  const videoRef = useRef();

  const postHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!video || !caption || !topic) {
      toast.error("fields required");
      return;
    }

    const post = {
      _type: "post",
      video: video,
      caption: caption,
      topic: topic,
      postedBy: {
        _type: "postedBy",
        _ref: user._id,
      },
      userId: user._id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/newpost`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      throw new Error("failed to upload video");
    }
    const data = await res.json();
    console.log("ccccccccc");
    console.log(data);
    toast.success(data.message);
    setCaption("");
    setVideo("");
  };

  const deleteVideo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/deletevideo`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: video }),
      }
    );
    if (!res.ok) {
      throw new Error("failed to delete video");
    }
    const data = await res.json();
    console.log("ccccccccc");
    console.log(data);
    toast.success(data.result);
    setVideo("");
  };

  return (
    <div className="w-full h-full overflow-scroll md:overflow-hidden">
      <div className="py-7 pl-11 xl:pl-0">
        <Link href={"/"}>
          <FaArrowLeft size={"1.6rem"} />
        </Link>
      </div>
      <div
        className="flex w-full gap-11 md:gap-24 flex-col md:flex-row 
       px-11 xl:px-0 items-center"
      >
        <div className="basis-1/3">
          {video ? (
            <div className="w-full bg-[#f7f7f7]">
              <Video
                publicId={`${video}`}
                width="100%"
                controls
                innerref={videoRef}
              />
              <div className="text-end px-3 py-3 w-full flex justify-end">
                <AiFillDelete color="red" size={"2rem"} onClick={deleteVideo} />
              </div>
            </div>
          ) : (
            <VideoPicker video={video} setVideo={setVideo} />
          )}
        </div>

        <NewPostForm
          postMethod={postHandler}
          setCaption={setCaption}
          caption={caption}
          topic={topic}
          setTopic={setTopic}
        />
      </div>
    </div>
  );
}
