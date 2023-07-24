"use client";
import CircularProgressBar from "@/components/CircularProgressBar";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <CircularProgressBar />
    </div>
  );
}
