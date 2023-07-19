import { client } from "@/lib/utils/client";

export async function POST(req: Request) {
  try {
    const { comment, postId } = await req.json();

    const res = await client
      .patch(postId)
      // Ensure that the `reviews` arrays exists before attempting to add items to it
      .setIfMissing({ comments: [] })
      // Add the items after the last item in the array (append)
      .insert("after", "comments[-1]", [comment])
      .commit({
        // Adds a `_key` attribute to array items, unique within the array, to
        // ensure it can be addressed uniquely in a real-time collaboration context
        autoGenerateArrayKeys: true,
      });

    return new Response(JSON.stringify({ message: "success" }), {
      status: 201,
    });
  } catch (e) {
    return new Response();
  }
}
