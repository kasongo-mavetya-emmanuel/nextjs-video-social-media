export default function PersonListTile() {
  return (
    <div className="flex items-center">
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
    </div>
  );
}
