import { topics } from "@/lib/constants/constants";
import { Topic } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const activeLink = "py-3 border-r-4 border-black font-semibold";
const normalLink = "py-3";

export default function Discover() {
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic");

  return (
    <div className="pt-7">
      <div className="w-[90%] h-[1px] bg-slate-200 mb-5"></div>
      <h3 className="text-slate-400">TOPICS</h3>
      <ul>
        {topics.map((top: Topic, index) => {
          return (
            <li
              key={index}
              className={`${
                topic === top.value ? activeLink : normalLink
              } hover:bg-slate-100`}
            >
              <Link href={`/?topic=${top.value}`}>{top.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
