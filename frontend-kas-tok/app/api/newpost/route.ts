import { client } from "@/lib/utils/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (session) {
    const post = await req.json();

    await client.create(post);
    return new Response(JSON.stringify({ message: "post created" }), {
      status: 200,
    });
  }
  return new Response("failed to post", { status: 400 });
}
