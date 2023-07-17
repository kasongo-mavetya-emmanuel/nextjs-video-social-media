import { getPosts } from "@/lib/constants/queries";
import { authOptions } from "@/lib/utils/auth";
import { client } from "@/lib/utils/client";
import { getServerSession } from "next-auth";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  console.log("tttttttttt");

  if (session) {
    const topic = await req.json();
    console.log(topic);

    const posts = await client.fetch(getPosts(topic));
    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  }
  return new Response("", { status: 400 });
}
