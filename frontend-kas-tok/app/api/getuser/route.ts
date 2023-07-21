import { fetchUser } from "@/lib/constants/queries";
import { authOptions } from "@/lib/utils/auth";
import { client } from "@/lib/utils/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await client.fetch(fetchUser(session.user.id));

    return NextResponse.json(user);
  }

  return new Response(JSON.stringify({ message: "login please" }), {
    status: 400,
  });
}
