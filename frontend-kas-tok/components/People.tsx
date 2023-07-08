import PersonListTile from "./PersonListTile";

export default function People() {
  return (
    <div className="basis-1/4 border-l-2 border-slate-200 pt-7 pl-5">
      <h2 className="font-bold">Suggested People</h2>
      <ul className="pt-7">
        <li className="w-full">
          <PersonListTile />
        </li>
      </ul>
    </div>
  );
}
