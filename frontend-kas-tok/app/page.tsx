import { SideBar, Content, People, Home } from "../components";
export default function HomeRoute() {
  return (
    <Home>
      <SideBar />
      <Content />
      <People />
    </Home>
  );
}
