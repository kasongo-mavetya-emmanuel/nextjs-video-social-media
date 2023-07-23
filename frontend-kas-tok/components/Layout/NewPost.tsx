"use client";
import { FaArrowLeft } from "react-icons/fa";
import VideoPicker from "../VideoPicker";
import NewPostForm from "../NewPostForm";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Video } from "cloudinary-react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Link from "next/link";
import CircularProgressBar from "../CircularProgressBar";

export default function NewPost() {
  const [video, setVideo] = useState("");
  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("development");
  const videoRef = useRef();
  const { data: session } = useSession();
  const [loadingvid, setLoadingVid] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);

  const postHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!video || !caption || !topic) {
      toast.error("fields required");
      return;
    }

    if (!session) {
      toast.error("Login Please");
      return;
    }

    setLoadingPost(true);

    const post = {
      _type: "post",
      video: video,
      caption: caption,
      topic: topic,
      postedBy: {
        _type: "postedBy",
        _ref: session.user.id,
      },
      userId: session.user.id,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/newpost`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      setLoadingPost(false);

      toast.error("failed to post");
    }
    const data = await res.json();
    console.log("ccccccccc");
    console.log(data);
    toast.success(data.message);
    setCaption("");
    setVideo("");
    setLoadingPost(false);
  };

  const deleteVideo = async () => {
    setLoadingPost(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/deletevideo`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: video }),
      }
    );
    if (!res.ok) {
      setLoadingPost(false);
      toast.error("failed to delete");
    }
    const data = await res.json();
    console.log("ccccccccc");
    console.log(data);
    toast.success(data.result);
    setLoadingPost(false);
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
        {loadingvid ? (
          <div className="basis-1/3 flex justify-center">
            <CircularProgressBar />
          </div>
        ) : (
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
                  <AiFillDelete
                    color="red"
                    size={"2rem"}
                    onClick={deleteVideo}
                  />
                </div>
              </div>
            ) : (
              <VideoPicker
                video={video}
                setVideo={setVideo}
                setLoadingVid={setLoadingVid}
              />
            )}
          </div>
        )}

        <NewPostForm
          postMethod={postHandler}
          setCaption={setCaption}
          caption={caption}
          topic={topic}
          setTopic={setTopic}
          loadingPost={loadingPost}
        />
      </div>
    </div>
  );
}
