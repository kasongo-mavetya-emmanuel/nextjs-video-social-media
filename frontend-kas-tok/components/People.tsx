import PersonListTile from "./PersonListTile";

export default function People() {
  return (
    <div
      className="basis-1/4 border-l-2 border-slate-200 pt-7 pl-3 xl:pl-5 pr-7 xl:pr-0 absolute md:relative
    bg-white md:bg-transparent h-full w-screen md:w-auto invisible md:visible"
    >
      <h2 className="font-bold">Suggested People</h2>
      <ul className="pt-7">
        <li className="w-full">
          <PersonListTile />
        </li>
      </ul>
    </div>
  );
}
