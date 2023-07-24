import CircularProgressBar from "@/components/CircularProgressBar";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgressBar />
    </div>
  );
}
