import { topics } from "@/lib/constants/constants";
import { Topic } from "@/types";
import CircularProgressBar from "./CircularProgressBar";

const NewPostForm = ({
  postMethod,
  caption,
  topic,
  setTopic,
  setCaption,
  loadingPost,
}: any) => {
  return (
    <form
      onSubmit={postMethod}
      className="flex flex-col gap-11 flex-1 w-full md:w-auto"
    >
      <label className="text-sm font-semibold">
        Caption :
        <input
          required
          name="caption"
          value={caption}
          placeholder="Caption"
          className="block outline-none border border-black mt-2 rounded-sm px-3 py-3 w-full md:w-[80%]  font-normal"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
      </label>
      <label className="text-sm font-semibold">
        Topic :
        <select
          name="topics"
          placeholder="Select a Topic"
          className="font-normal px-3 py-3 rounded-sm block border border-black w-[50%] outline-none mt-2"
          onChange={(e) => {
            console.log("22222222");
            console.log(e.target.value);
            setTopic(e.target.value);
          }}
        >
          {topics.map((topic: Topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.name}
            </option>
          ))}
        </select>
      </label>

      {loadingPost ? (
        <div className="flex justify-center">
          <CircularProgressBar />
        </div>
      ) : (
        <div className="flex gap-5">
          <button className="border border-black py-3 px-5 rounded-sm">
            Discard
          </button>
          <button
            type="submit"
            className="border border-black bg-black text-white py-3 px-9 rounded-sm"
          >
            Post
          </button>
        </div>
      )}
    </form>
  );
};

export default NewPostForm;
