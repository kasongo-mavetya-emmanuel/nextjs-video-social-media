import { client } from "@/lib/utils/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  await client.createIfNotExists(body);

  return NextResponse.json({ message: "Succes Login" });
}
