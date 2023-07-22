import { getPosts } from "@/lib/constants/queries";
import { client } from "@/lib/utils/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const topic = searchParams.get("topic");

    const posts = await client.fetch(getPosts(topic === "null" ? "" : topic!));

    console.log(posts);

    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response("", { status: 400 });
  }
}
