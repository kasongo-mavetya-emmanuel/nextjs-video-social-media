import { Home } from "@/components";
import { headers } from "next/headers";
import NewPost from "@/components/Layout/NewPost";

// async function getUserData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getuser`, {
//     method: "GET",
//     headers: headers(),
//   });
//   console.log("------------------------------");

//   if (!res.ok) {
//     throw new Error("failed to load data");
//   }
//   const data = await res.json();
//   console.log(data);
//   return data;
// }
export default async function NewPostPage() {
  // const data = await getUserData();
  // console.log(data);

  return (
    <Home>
      <NewPost />
    </Home>
  );
}
