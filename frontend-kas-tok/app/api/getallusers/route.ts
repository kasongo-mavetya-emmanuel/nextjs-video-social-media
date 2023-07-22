import { getUsers } from "@/lib/constants/queries";
import { client } from "@/lib/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await client.fetch(getUsers());

    return NextResponse.json(users);
  } catch (e) {
    return new Response();
  }
}
