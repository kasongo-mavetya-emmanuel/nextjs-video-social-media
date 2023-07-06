import { NavBar, SideBar, Content, People } from "./components";
export default function Home() {
  return (
    <main className="w-screen h-[100vh] bg-white overflow-hidden">
      <NavBar />
      <main className="max-w-screen-lg mx-auto h-full flex">
        <SideBar />
        <Content />
        <People />
      </main>
    </main>
  );
}
