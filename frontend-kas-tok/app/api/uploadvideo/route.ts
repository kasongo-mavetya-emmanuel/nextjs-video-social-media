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

    const doc = await cloudinary.uploader.upload(body.result, {
      resource_type: "video",
      timeout: 200000,
    });

    return new Response(JSON.stringify({ publicId: doc.public_id }), {
      status: 200,
    });
  }

  return new Response("Failed to upload the video", { status: 400 });
}

// {
//   asset_id: '05dc90ec15d84f58d3e219cedd618468',
//   public_id: 'tz5b8uonuqhmomklppc8',
//   version: 1689505638,
//   version_id: '212adda4cc178fa866f87a69c0d402d9',
//   signature: '1ba19792a0cee4a56e65399b0b7f1d2d911b7ec4',
//   width: 1280,
//   height: 720,
//   format: 'mp4',
//   resource_type: 'video',
//   created_at: '2023-07-16T11:07:18Z',
//   tags: [],
//   pages: 0,
//   bytes: 1334348,
//   type: 'upload',
//   etag: '76de1efec5394969f6e09dc81d7cdc47',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/dcoebvibe/video/upload/v1689505638/tz5b8uonuqhmomklppc8.mp4',
//   secure_url: 'https://res.cloudinary.com/dcoebvibe/video/upload/v1689505638/tz5b8uonuqhmomklppc8.mp4',
//   playback_url: 'https://res.cloudinary.com/dcoebvibe/video/upload/sp_auto/v1689505638/tz5b8uonuqhmomklppc8.m3u8',
//   folder: '',
//   audio: {
//     codec: 'aac',
//     bit_rate: '3100',
//     frequency: 44100,
//     channels: 2,
//     channel_layout: 'stereo'
//   },
//   video: {
//     pix_format: 'yuv420p',
//     codec: 'h264',
//     level: 31,
//     profile: 'High',
//     bit_rate: '1060628',
//     time_base: '1/60000'
//   },
//   is_audio: false,
//   frame_rate: 29.97002997002997,
//   bit_rate: 1066411,
//   duration: 10.01,
//   rotation: 0,
//   nb_frames: 300,
//   api_key: '539492991765928'
// }
