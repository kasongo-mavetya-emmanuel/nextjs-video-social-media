import { Content, Home, People, SideBar } from "@/components";
import ProfileDetails from "@/components/Layout/ProfileDetails";
import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

async function getUserData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getuser`, {
    method: "GET",
    headers: headers(),
  });

  if (!res.ok) {
    throw new Error("failed to load data");
  }
  const data = await res.json();
  return data;
}

export default async function Profile({
  params,
}: {
  params: { contentType: string[] };
}) {
  const { contentType } = params;
  const userData = await getUserData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProfileDetails contentType={contentType} user={userData} />
    </Suspense>
  );
}
