export default function People() {
  return (
    <div className="basis-1/4 border-l-2 border-slate-200 pt-7 pl-5">
      <h2 className="font-bold">Suggested People</h2>
      <ul className="pt-7">
        <li className="flex items-center">
          <div className="flex-1 flex gap-[0.5rem]">
            <div className="w-[4rem] h-[4rem] rounded-full bg-slate-200"></div>
            <div className="flex flex-col gap-[0.3rem] justify-center">
              <h4 className="text-xs font-semibold">Name</h4>
              <p className="text-xs">34k followers</p>
            </div>
          </div>
          <div>
            <button className="text-xs font-semibold bg-black text-white px-[0.8rem] rounded-full py-[0.5rem]">
              follow
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
