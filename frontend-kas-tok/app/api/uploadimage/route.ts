import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dcoebvibe",
  api_key: "539492991765928",
  api_secret: "***************************",
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  console.log("1111111111111111111111111");
  if (session) {
    const body: any = req.json();
    console.log("1111111111111111111111111");
    console.log(body);
    const doc = await cloudinary.uploader.upload("dog.mp4", {
      resource_type: "video",
    });
    console.log(doc);
    return new Response(JSON.stringify(doc), { status: 201 });
  }

  return new Response("Failed to upload the video", { status: 400 });
}
