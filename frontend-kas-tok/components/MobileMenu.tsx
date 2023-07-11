import { AppDispatch, RootState } from "@/store";
import { setIsMenu } from "@/store/windows";
import { useCallback } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function MobileMenu() {
  const isMenu = useSelector((state: RootState) => state.windows.isMenu);
  const dispatch = useDispatch<AppDispatch>();

  const toogleMenu = useCallback(() => {
    dispatch(setIsMenu());
  }, [dispatch]);

  return (
    <div className="md:hidden relative">
      <BsThreeDotsVertical onClick={toogleMenu} />
      <ul
        className={`bg-white absolute right-0 top-5 px-5 py-3 shadow z-50 flex flex-col gap-3 ${
          isMenu ? "visible" : "invisible"
        } md:visible`}
      >
        <li className="text-sm">Login</li>
        <li className="text-sm">Add&nbsp;Post</li>
        <li className="text-sm">Suggested&nbsp;People</li>
        <li className="text-sm">Profile</li>
      </ul>
    </div>
  );
}
