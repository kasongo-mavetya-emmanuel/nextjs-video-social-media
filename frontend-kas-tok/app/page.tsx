import { SideBar, Content, People, Home } from "../components";

export default function RootRoute() {
  return (
    <Home>
      <SideBar />
      <Content />
      <People />
    </Home>
  );
}
