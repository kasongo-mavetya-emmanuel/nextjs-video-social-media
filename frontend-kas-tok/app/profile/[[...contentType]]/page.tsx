import Loading from "@/app/loading";
import ProfileDetails from "@/components/Layout/ProfileDetails";
import { fetchUser } from "@/lib/constants/queries";
import { authOptions } from "@/lib/utils/auth";
import { client } from "@/lib/utils/client";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

async function getUserData() {
  const session = await getServerSession(authOptions);
  console.log("nnnnnnnnnnnnn", session);

  if (session) {
    const user = await client.fetch(fetchUser(session.user.id));
    console.log("bbbbbbbbb", user);
    return user;
  }

  return null;
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
