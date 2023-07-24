import Loading from "@/app/loading";
import { Content, Home, People, SideBar } from "@/components";
import ProfileDetails from "@/components/Layout/ProfileDetails";
import { Suspense } from "react";

async function getUserData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getuser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
    <Suspense fallback={<Loading />}>
      <ProfileDetails contentType={contentType} user={userData} />
    </Suspense>
  );
}
