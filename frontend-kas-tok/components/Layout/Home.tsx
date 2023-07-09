import { NavBar } from "..";

export default function Home({ children }: any) {
  return (
    <main className="w-screen h-[100vh] bg-white overflow-hidden">
      <NavBar />
      <main className="max-w-screen-lg mx-auto h-full flex relative">
        {children}
      </main>
    </main>
  );
}
