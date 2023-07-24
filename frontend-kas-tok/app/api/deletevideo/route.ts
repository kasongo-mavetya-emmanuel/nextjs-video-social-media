import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dcoebvibe",
  api_key: "539492991765928",
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (session) {
    const body: any = await req.json();

    const doc = await cloudinary.uploader.destroy(body.publicId, {
      resource_type: "video",
      // type: "authenticated",
      invalidate: true,
    });
    return new Response(JSON.stringify(doc), {
      status: 200,
    });
  }

  return new Response("Failed to delete the video", { status: 400 });
}
