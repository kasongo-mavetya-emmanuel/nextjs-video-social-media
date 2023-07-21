import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, followingUser } = await req.json();

    await client
      .patch(userId)
      // Ensure that the `reviews` arrays exists before attempting to add items to it
      .setIfMissing({ followers: [] })
      // Add the items after the last item in the array (append)
      .insert("after", "followers[-1]", [followingUser])
      .commit({
        // Adds a `_key` attribute to array items, unique within the array, to
        // ensure it can be addressed uniquely in a real-time collaboration context
        autoGenerateArrayKeys: true,
      });

    return NextResponse.json({
      message: "success",
    });
  } catch (err) {
    return new Response();
  }
}
