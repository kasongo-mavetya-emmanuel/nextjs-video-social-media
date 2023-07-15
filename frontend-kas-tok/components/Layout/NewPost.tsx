"use client";
import { FaArrowLeft } from "react-icons/fa";
import VideoPicker from "../VideoPicker";
import NewPostForm from "../NewPostForm";
import { useState } from "react";

export default function NewPost() {
  const [imageDoc, setImageDoc] = useState(null);
  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("");

  const postHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <VideoPicker imageDoc={imageDoc} setImageDoc={setImageDoc} />
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
