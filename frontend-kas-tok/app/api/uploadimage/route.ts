import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  console.log("1111111111111111111111111");
  if (session) {
    const body: any = req.json();
    const document = await client.assets.upload("file", body, {
      filename: body.filename,
      contentType: body.contentType,
    });

    return new Response(JSON.stringify(document), { status: 201 });
  }

  return new Response("Failed to upload the video", { status: 400 });
}
