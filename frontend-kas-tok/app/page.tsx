import { Suspense } from "react";
import { SideBar, Content, People, Home } from "../components";
import Loading from "./loading";

export default function RootRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Home>
        <SideBar />
        <Content />
        <People />
      </Home>
    </Suspense>
  );
}
