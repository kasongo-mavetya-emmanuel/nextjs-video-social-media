import { Home } from "@/components";
import NewPost from "@/components/Layout/NewPost";
import { Suspense } from "react";

export default async function NewPostPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Home>
        <NewPost />
      </Home>
    </Suspense>
  );
}
