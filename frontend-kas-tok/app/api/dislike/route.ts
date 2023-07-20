import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { postId, likeKey } = await req.json();

    const reviewsToRemove = [`likes[_key=="${likeKey}"]`];
    client.patch(postId).unset(reviewsToRemove).commit();

    return NextResponse.json({
      message: "success",
    });
  } catch (err) {
    return new Response();
  }
}
