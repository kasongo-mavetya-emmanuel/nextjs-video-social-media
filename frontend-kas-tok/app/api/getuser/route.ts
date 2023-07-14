import { getUserByEmail } from "@/lib/constants/queries";
import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

export async function GET(req: Request) {
  console.log("=======================");

  const session = await getServerSession(authOptions);

  console.log("=======================");
  console.log("=======================");

  if (session) {
    const { user } = session;
    console.log(user);

    const userDetails = await client.fetch(getUserByEmail(`${user?.email}`));
    return new Response(JSON.stringify(userDetails), { status: 200 });
  }
  return new Response("login please", { status: 400 });
}
