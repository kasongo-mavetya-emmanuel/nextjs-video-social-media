import { getPosts, searchPosts } from "@/lib/constants/queries";
import { client } from "@/lib/utils/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const posts = await client.fetch(
      searchPosts(search === "null" ? "" : search!)
    );

    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (e) {
    return new Response();
  }
}
