import { toast } from "react-hot-toast";
import { BiSolidCloudUpload } from "react-icons/bi";

const VideoPicker = ({ imageDoc, setImageDoc }: any) => {
  const uploadVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (
      selectedFile?.type === "video/mp4" ||
      selectedFile?.type === "video/webm" ||
      selectedFile?.type === "video/ogg" ||
      selectedFile?.type === "video/mpeg" ||
      selectedFile?.type === "video/ogg"
    ) {
      const sizeInMB = parseFloat(
        (selectedFile.size / (1024 * 1024)).toFixed(2)
      );
      console.log(sizeInMB);
      if (sizeInMB > 10) {
        console.log(sizeInMB);
        toast.error("your file size is greater than 10mb");
      } else {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploadimage`,
          {
            method: "POST",
            body: JSON.stringify(selectedFile),
          }
        );

        if (!res.ok) {
          throw new Error("failed to upload video");
        }

        console.log(res);
        const data = await res.json();
        console.log("4444444444");
        console.log(data);

        setImageDoc(data);
      }
    } else {
      toast.error("Wrong file format");
    }
  };
  return (
    <label>
      <div
        className="flex flex-col justify-center h-[60vh] items-center gap-9 p-7 
    rounded hover:bg-slate-100
    border-4 border-dashed cursor-pointer border-slate-400 hover:border-[#444]"
      >
        <div className="text-center flex flex-col items-center gap-7">
          <BiSolidCloudUpload size={"4rem"} color="#b7b7b7" />
          <p className="text-slate-400">
            Recommendations: MP4, MKV, less than 10min
          </p>
          <p className="bg-black text-white w-full py-5 rounded-sm cursor-pointer ">
            Select File
          </p>
        </div>
      </div>
      <input onChange={uploadVideo} type="file" className="w-0 -0" />
    </label>
  );
};

export default VideoPicker;
