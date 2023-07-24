import { Home } from "@/components";
import NewPost from "@/components/Layout/NewPost";
import { Suspense } from "react";
import Loading from "../loading";

export default async function NewPostPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home>
        <NewPost />
      </Home>
    </Suspense>
  );
}
