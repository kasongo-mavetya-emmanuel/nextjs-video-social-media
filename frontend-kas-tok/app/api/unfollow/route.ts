import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, followingKey } = await req.json();

    const reviewsToRemove = [`followers[_key=="${followingKey}"]`];
    client.patch(userId).unset(reviewsToRemove).commit();

    return NextResponse.json({
      message: "success",
    });
  } catch (err) {
    return new Response();
  }
}
