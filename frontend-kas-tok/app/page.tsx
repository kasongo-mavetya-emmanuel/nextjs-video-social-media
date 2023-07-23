import { Suspense } from "react";
import { SideBar, Content, People, Home } from "../components";

export default function RootRoute() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Home>
        <SideBar />
        <Content />
        <People />
      </Home>
    </Suspense>
  );
}
