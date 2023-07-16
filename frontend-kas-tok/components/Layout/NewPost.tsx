"use client";
import { FaArrowLeft } from "react-icons/fa";
import VideoPicker from "../VideoPicker";
import NewPostForm from "../NewPostForm";
import { useRef, useState } from "react";
import { Video } from "cloudinary-react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

export default function NewPost() {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("");
  const videoRef = useRef();

  const postHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const deleteVideo = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploadvideo`,
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
    toast.success("successfully deleted");
    setVideo(null);
  };

  return (
    <div className="w-full h-full overflow-scroll md:overflow-hidden">
      <div className="py-7 pl-11 xl:pl-0">
        <FaArrowLeft size={"1.6rem"} />
      </div>
      <div
        className="flex w-full gap-11 md:gap-24 flex-col md:flex-row 
       px-11 xl:px-0 items-center"
      >
        <div className="basis-1/3">
          <div className="w-full bg-[#f7f7f7]">
            <Video
              publicId="tz5b8uonuqhmomklppc8"
              width="100%"
              controls
              innerref={videoRef}
            />
            <div className="text-end px-3 py-3 w-full flex justify-end">
              <AiFillDelete color="red" size={"2rem"} onClick={deleteVideo} />
            </div>
          </div>
          {/* <VideoPicker video={video} setVideo={setVideo} /> */}
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
